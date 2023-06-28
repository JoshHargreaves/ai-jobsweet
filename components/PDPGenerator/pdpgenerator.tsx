import { useState } from "react";
import DropDown, { ToneType } from "../Dropdown/DropDown";
import toast, { Toaster } from "react-hot-toast";

export default function PDPGenerator() {
  const [generatedDescription, setGeneratedPDP] = useState<string>("");
  const [tone, setTone] = useState<ToneType>("Story");
  const [post, setPost] = useState<string>("");

  const [employeeName, setEmployeeName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [industry, setIndustry] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [salary, setSalary] = useState('');
  const [strengths, setStrengths] = useState('');
  const [weaknesses, setWeaknesses] = useState('');

  // add more vibes as needed
  const handlePrompt = () => {
    let prompt = `I want you to act as an employee creating a personal development plan. I will provide some information about an employee, and it will be your job to create an engaging personal development plan to help this employee grow. This should include; setting goals, prioritising those goals, deadlines for when they should be achieved, recognise threats and opportunites, develop skills and increasing knowledge. It should be as detailed as possible.
    Each goal should have a heading on a seperate paragraph for; what is your goal:, what you want to achieve? , what actions you will take?, what resources and support are needed?, what success looks like?, target for completion?.
    The name of the employee is ${employeeName} and they work for  ${companyName}, the job title is ${jobTitle} and the company industry is ${industry}. The employee strengths are ${strengths} and their weaknesses are ${weaknesses}.`;
    prompt + `It should be Formal and not contain too many lists`;
    return prompt;
  };

  // function to send post to OpenAI and get response
  const generateDescription = async (e: any) => {
    if (!jobTitle) {
      return null;
    }
    if (!industry) {
      return null;
    }
    if (!companyName) {
      return null;
    }
    if (!strengths) {
      return null;
    }

    if (!weaknesses) {
      return null;
    }

    e.preventDefault();
    setGeneratedPDP("");
    const prompt = handlePrompt();
    const response = await fetch("/api/openAiStream", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),

    });


    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      const formattedChunk = chunkValue.replace(/\n/g, "<br>");
      setGeneratedPDP((prev) => prev + formattedChunk);
    }
  };


    return(

        <div className="px-4">
        <div className='max-w-5xl mx-auto'>
          <h1 className="sm:text-6xl text-4xl font-bold text-slate-900">
            Generate A Personal Development Plan
          </h1>
          <p className="sm:text-lg text-lg text-slate-600">
            Optimise your personal growth
          </p>
          <div className="flex flex-col md:flex-row w-full md:p-12">
            <div className='flex md:flex-col sm:flex-row s:w-full md:w-2/4'>
              <div className="inline-block relative">
                <form>
                  <div className="md:px-5 pb-5">
                  <input placeholder="Employee name" required name="employeeName" onChange={e => { setEmployeeName(e.currentTarget.value); }} className="text-gray-900 w-full px-4 py-2.5 mt-2 bg-white border border-gray-300 rounded-md shadow-inner"></input>
                    <input placeholder="Job Title" required name="jobTitle" onChange={e => { setJobTitle(e.currentTarget.value); }} className="text-gray-900 w-full px-4 py-2.5 mt-2 bg-white border border-gray-300 rounded-md shadow-inner"></input>
                    <input placeholder="Industry" required onChange={e => { setIndustry(e.currentTarget.value); }} className="text-black w-full px-4 py-2.5 mt-2 bg-white border border-gray-300 rounded-md shadow-inner"></input>
                    <input placeholder="Company Name" required onChange={e => { setCompanyName(e.currentTarget.value); }} className="text-black w-full px-4 py-2.5 mt-2 bg-white border border-gray-300 rounded-md shadow-inner"></input>
                    <input placeholder="Salary" hidden type='number' className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-white-100  border border-gray-300 rounded-md shadow-inner"></input>
                    <textarea max-Length="2000" required onChange={e => { setStrengths(e.currentTarget.value); }} placeholder="Strengths" className="text-black w-full h-56 px-4 py-2.5 mt-2 text-s bg-white border border-gray-300 rounded-md shadow-inner md:h-240" spellCheck="false"></textarea>
                    <textarea max-Length="2000" required onChange={e => { setWeaknesses(e.currentTarget.value); }} placeholder="Weaknesses" className="text-black w-full h-56 px-4 py-2.5 mt-2 text-s bg-white border border-gray-300 rounded-md shadow-inner md:h-240" spellCheck="false"></textarea>
                    <button
                      className="bg-orange-600 rounded-md text-white font-medium px-4 py-2.5 sm:mt-2 mt-2 hover:bg-black/80 w-full"
                      onClick={(e) => generateDescription(e)}>
                      Generate Job PDP
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className='flex md:flex-col sm:flex-row s:w-full md:w-2/4'>
              <div className="inline-block relative text-slate-900 w-full">
                <Toaster
                  position="top-right"
                  reverseOrder={false}
                  toastOptions={{ duration: 2000 }}
                />
                {generatedDescription && (

                  <div className="max-w-5xl my-4 mx-auto">
                    <div
                      className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                      onClick={() => {
                        navigator.clipboard.write([
                          new ClipboardItem({
                            "text/html": new Blob([generatedDescription], { type: "text/html" }),
                          }),
                        ]);
                        toast("Post copied to clipboard", {
                          icon: "📋",
                        });
                      }}
                      key={generatedDescription}
                    >
                      <p className="text-slate-900" dangerouslySetInnerHTML={{ __html: generatedDescription }} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}