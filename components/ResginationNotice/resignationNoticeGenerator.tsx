import { useState } from "react";
import DropDown, { ToneType } from "../Dropdown/DropDown";
import toast, { Toaster } from "react-hot-toast";

export default function ResignationNoticeGenerator() {
  const [generatedDescription, setGeneratedPDP] = useState<string>("");
  const [tone, setTone] = useState<ToneType>("Story");
  const [post, setPost] = useState<string>("");

  const [jobTitle, setJobTitle] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [noticePeriodWeeks, setNoticePeriodWeeks] = useState("");
  const [companyName, setCompanyName] = useState("");

  // add more vibes as needed
  const handlePrompt = () => {
    let prompt = `You are employee called ${employeeName} and you are handing in your notice of resignation of your position as ${jobTitle} at the company ${companyName}. Your notice period is ${noticePeriodWeeks} weeks. The notice is effective from ${startDate}. This should be short and sweet and not contain more than two paragraphs. This should formal.`;
    return prompt;
  };

  // function to send post to OpenAI and get response
  const generateResponse = async (e: any) => {
    if (!employeeName) {
      return null;
    }
    if (!startDate) {
      return null;
    }
    if (!noticePeriodWeeks) {
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

  return (
    <div className="px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="sm:text-6xl text-4xl font-bold text-slate-900">
          Generate Your Resignation Notice
        </h1>
        <p className="sm:text-lg text-lg text-slate-600">
          AI generated Resignation Notice
        </p>
        <div className="flex flex-col md:flex-row w-full md:p-12">
          <div className="flex md:flex-col sm:flex-row s:w-full md:w-2/4">
            <div className="inline-block relative">
              <form>
                <div className="md:px-5 pb-5">
                  <input
                    placeholder="Job Title"
                    required
                    name="jobTitle"
                    onChange={(e) => {
                      setJobTitle(e.currentTarget.value);
                    }}
                    className="text-gray-900 w-full px-4 py-2.5 mt-2 bg-white border border-gray-300 rounded-md shadow-inner"
                  ></input>
                  <input
                    placeholder="Employee name"
                    required
                    name="employeeName"
                    onChange={(e) => {
                      setEmployeeName(e.currentTarget.value);
                    }}
                    className="text-gray-900 w-full px-4 py-2.5 mt-2 bg-white border border-gray-300 rounded-md shadow-inner"
                  ></input>
                  <input
                    placeholder="Company Name"
                    required
                    onChange={(e) => {
                      setCompanyName(e.currentTarget.value);
                    }}
                    className="text-black w-full px-4 py-2.5 mt-2 bg-white border border-gray-300 rounded-md shadow-inner"
                  ></input>
                  <input
                    placeholder="Start Date"
                    type="date"
                    required
                    name="startDate"
                    onChange={(e) => {
                      setStartDate(e.currentTarget.value);
                    }}
                    className="text-gray-900 w-full px-4 py-2.5 mt-2 bg-white border border-gray-300 rounded-md shadow-inner"
                  ></input>
                  <input
                    placeholder="Notice period in weeks"
                    type="number"
                    required
                    name="secondaryContact"
                    onChange={(e) => {
                      setNoticePeriodWeeks(e.currentTarget.value);
                    }}
                    className="text-gray-900 w-full px-4 py-2.5 mt-2 bg-white border border-gray-300 rounded-md shadow-inner"
                  ></input>
                  <button
                    className="bg-orange-600 rounded-md text-white font-medium px-4 py-2.5 sm:mt-2 mt-2 hover:bg-black/80 w-full"
                    onClick={(e) => generateResponse(e)}
                  >
                    Generate Resignation Notice
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-row s:w-full md:w-2/4">
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
                          "text/html": new Blob([generatedDescription], {
                            type: "text/html",
                          }),
                        }),
                      ]);
                      toast("Post copied to clipboard", {
                        icon: "📋",
                      });
                    }}
                    key={generatedDescription}
                  >
                    <p
                      className="text-slate-900"
                      dangerouslySetInnerHTML={{ __html: generatedDescription }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
