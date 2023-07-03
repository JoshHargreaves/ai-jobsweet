import { useState } from "react";
import DropDown, { ToneType } from "../Dropdown/DropDown";
import toast, { Toaster } from "react-hot-toast";

export default function PrivacyPolicyGenerator() {
  const [generatedDescription, setGeneratedDescription] = useState<string>("");
  const [tone, setTone] = useState<ToneType>("Story");
  const [post, setPost] = useState<string>("");

  const [jobTitle, setJobTitle] = useState('');
  const [industry, setIndustry] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [salary, setSalary] = useState('');
  const [keywords, setKeywords] = useState('');

  // add more vibes as needed
  const handlePrompt = () => {
    let prompt = `I want you to create a privacy policy for ${companyName} in the industry ${industry} .These keywords will help create the privacy policy ${keywords}.`;
    return prompt;
  };

  // function to send post to OpenAI and get response
  const generateResponse = async (e: any) => {
    if (!industry) {
      return null;
    }
    if (!companyName) {
      return null;
    }
    if (!keywords) {
      return null;
    }

    e.preventDefault();
    setGeneratedDescription("");
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
      setGeneratedDescription((prev) => prev + formattedChunk);
    }
  };


    return(

        <div className="px-4">
        <div className='max-w-5xl mx-auto'>
          <h1 className="sm:text-6xl text-4xl font-bold text-slate-900">
            Generate A Privacy Policy
          </h1>
          <p className="sm:text-lg text-lg text-slate-600">
            AI Generated Privacy Policy
          </p>
          <div className="flex flex-col md:flex-row w-full md:p-12">
            <div className='flex md:flex-col sm:flex-row s:w-full md:w-2/4'>
              <div className="inline-block relative">
                <form>
                  <div className="md:px-5 pb-5">
                    <input placeholder="Industry" required onChange={e => { setIndustry(e.currentTarget.value); }} className="text-black w-full px-4 py-2.5 mt-2 bg-white border border-gray-300 rounded-md shadow-inner"></input>
                    <input placeholder="Company Name" required onChange={e => { setCompanyName(e.currentTarget.value); }} className="text-black w-full px-4 py-2.5 mt-2 bg-white border border-gray-300 rounded-md shadow-inner"></input>
                    <div className="block">
                      <DropDown tone={tone} setTone={setTone} />
                    </div>
                    <textarea max-Length="2000" required onChange={e => { setKeywords(e.currentTarget.value); }} placeholder="Keywords" className="text-black w-full h-56 px-4 py-2.5 mt-2 text-s bg-white border border-gray-300 rounded-md shadow-inner md:h-240" spellCheck="false"></textarea>
                    <button
                      className="bg-orange-600 rounded-md text-white font-medium px-4 py-2.5 sm:mt-2 mt-2 hover:bg-black/80 w-full"
                      onClick={(e) => generateResponse(e)}>
                      Generate Privacy Policy
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