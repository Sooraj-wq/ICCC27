import { useState } from "react";
import GradientBlob from "../components/GradientBlob";
import GlassCard from "../components/GlassCard";

const guidelineTabs = [
  { id: "submission", label: "Paper Submission" },
  { id: "presentation", label: "Presentation" },
  { id: "cameraready", label: "Camera-Ready" },
];

const authorDeadlines = [
  { event: "Paper Submission Opening Date", date: "Oct 15, 2026" },
  { event: "Paper Submission Deadline", date: "Dec 15, 2026" },
  {
    event: "Notification to Authors",
    date: "Feb 15, 2027",
    note: "Rolling Reviews",
  },
  { event: "Registration Opens", date: "To Be Announced" },
  { event: "Camera-Ready Submission Deadline", date: "Mar 1, 2027" },
  { event: "Registration Ends", date: "To Be Announced" },
  { event: "Date of Conference", date: "May 21\u201323, 2027" },
];

export default function AuthorGuidelines() {
  const [activeTab, setActiveTab] = useState("submission");

  return (
    <div className="relative overflow-hidden pt-24">
      <GradientBlob className="top-[-100px] right-[-200px]" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-10">
          <span className="text-sm uppercase tracking-[0.2em] text-blue-500 font-medium">
            Call for Papers
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-gray-900 mt-4">
            Author{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              Guidelines
            </span>
          </h1>
          <p className="mt-3 text-lg text-blue-600 max-w-lg mx-auto">
            Everything you need to prepare, submit and present your paper at
            ICCC 2027.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {guidelineTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <GlassCard className="max-w-4xl mx-auto p-6 sm:p-10">
          {activeTab === "submission" && (
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                  Instructions
                </h3>
                <ol className="space-y-3 list-decimal list-inside">
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    Use only{" "}
                    <a
                      href="https://www.ieee.org/conferences/publishing/templates.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      IEEE standard two column conference paper template
                    </a>
                    .
                  </li>
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    The maximum length of the paper for review is 6 pages
                    including references. The maximum file size allowed is 10 MB
                    in PDF format without encryption and/or passwords.
                  </li>
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    Papers having poor quality and/or high similarity index will
                    be desk rejected (without review).
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                  Important Deadlines for Authors
                </h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-left border-collapse min-w-[480px]">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-sm font-semibold text-gray-900 border-b border-gray-200">
                          Event
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-900 border-b border-gray-200">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200/60">
                      {authorDeadlines.map((row) => (
                        <tr key={row.event} className="hover:bg-gray-50/50">
                          <td className="px-4 py-3 text-sm sm:text-base text-gray-900">
                            {row.event}
                          </td>
                          <td className="px-4 py-3 text-sm sm:text-base text-blue-600 font-medium">
                            {row.date}
                            {row.note && (
                              <span className="block text-xs text-gray-500">
                                ({row.note})
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  * All deadlines are in Indian Standard Time (IST).
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                  Procedure for Uploading Papers
                </h3>
                <ol className="space-y-3 list-decimal list-inside">
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    Go to the paper submission website. The conference uses the
                    Microsoft CMT service for managing the peer-reviewing
                    process. The submission portal link will be shared on this
                    page once it opens.
                  </li>
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    If you are new to the system, choose "Register" at the bottom
                    of the dialog box.
                  </li>
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    Follow the wizard to finish the registration. Upon finishing,
                    you'll have an account in the system with user ID and
                    password.
                  </li>
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    Log into the system using your login account info (email
                    address and password). From the drop down menu, select the
                    track to which you want to send the papers. It is the
                    responsibility of the author to send his/her paper to the
                    most appropriate track. Otherwise it may be difficult to get
                    proper review of the papers. Make sure that you are
                    submitting the paper to only one track. Otherwise, your
                    paper will be rejected.
                  </li>
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    Fill out the submission form: "Title", "Abstract", and
                    "Authors" and enter email ID and details of all the co-authors
                    (Name, Designation, Institute and the Country to which your
                    institute is affiliated etc.) and "Submit" your paper.
                  </li>
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    After successful submission, a confirmation email will be
                    sent to all authors by the Microsoft CMT system.
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                  AI Usage Disclosure
                </h3>
                <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                  During the preparation of this manuscript, the authors used
                  generative artificial intelligence tools, including ChatGPT, for
                  limited assistance with language editing, grammar correction,
                  clarity of expression, and refinement of the presentation. The
                  tools were not used to generate, validate, or interpret the
                  research results, experimental findings, or scientific
                  conclusions. The authors have reviewed and verified all content
                  and remain fully responsible for the accuracy, originality, and
                  integrity of the manuscript.
                </p>
              </div>
            </div>
          )}

          {activeTab === "presentation" && (
            <div>
              <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                Presentation Guidelines
              </h3>
              <ul className="space-y-3">
                {[
                  "Each parallel session will include multiple presentations.",
                  "Presenters will have 13 minutes for their presentation (10 minutes for presentation, 3 minutes for discussion).",
                  "Each presentation may use a maximum of 15 slides including the introduction, references, and end slide.",
                  "Please prepare your presentation in PowerPoint or Beamer in the template provided.",
                  "Bring an extra copy of your presentation to the event (on a USB stick or by sending it to your email).",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base sm:text-lg text-gray-900 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "cameraready" && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                  Camera-Ready Paper Submission Guidelines
                </h3>
                <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                  The authors need to submit the following files in the
                  Camera-Ready Submission section:
                </p>
                <ol className="mt-3 space-y-2 list-decimal list-inside">
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    Camera-Ready Paper (Paper must be renamed with PID_paper ID.
                    Example: Paper ID 1 &rarr; PID_001)
                  </li>
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    Reviewer Response (Paper must be renamed with
                    ReviewResponse_paper ID. Example: Paper ID 1 &rarr;
                    ReviewResponse_001)
                  </li>
                </ol>
              </div>

              <div>
                <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                  At least one author must register and present the selected
                  paper at ICCC 2027 for the paper to be considered for inclusion
                  in IEEE Xplore. The registration link will be shared once
                  registrations open.
                </p>
                <p className="mt-3 text-base sm:text-lg text-gray-900 leading-relaxed">
                  Authors must submit the camera-ready version as per the
                  guidelines given on the conference website and below, on or
                  before Mar 1, 2027. The last date for registration will be
                  announced shortly.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  Before submitting the camera-ready paper, ensure that:
                </h3>
                <ul className="space-y-2">
                  {[
                    "The manuscript has plagiarism below 30%, checked using standard plagiarism detection software.",
                    "Reviewers' comments have been incorporated into the revised submission.",
                    "The camera-ready submission strictly follows the IEEE Template.",
                    "The Final Camera-Ready Paper must be within six pages. Papers not meeting these requirements will not be submitted to IEEE Xplore.",
                    "The final manuscript must include the copyright clearance code notice at the bottom of the first page. Replace the default copyright code with the appropriate one.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base sm:text-lg text-gray-900 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  Copyright Clearance Code
                </h3>
                <ul className="space-y-2">
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    For papers in which all authors are employed by the US
                    government, the copyright notice is:{" "}
                    <span className="font-semibold">
                      U.S. Government work not protected by U.S. copyright
                    </span>
                  </li>
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    For papers in which all authors are employed by a Crown
                    government (UK, Canada, and Australia), the copyright notice
                    is:{" "}
                    <span className="font-semibold">
                      979-8-3315-1949-0/27/$31.00 ©2027 Crown
                    </span>
                  </li>
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    For papers in which all authors are employed by the European
                    Union, the copyright notice is:{" "}
                    <span className="font-semibold">
                      979-8-3315-1949-0/27/$31.00 ©2027 European Union
                    </span>
                  </li>
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    For all other papers the copyright notice is:{" "}
                    <span className="font-semibold">
                      979-8-3315-1949-0/27/$31.00 ©2027 IEEE
                    </span>
                  </li>
                </ul>
                <p className="mt-3 text-base sm:text-lg text-gray-900 leading-relaxed">
                  Authors must format their Camera-Ready Paper using IEEE PDF
                  eXpress and upload the IEEE-compliant PDF.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  IEEE PDF eXpress Instructions
                </h3>
                <ul className="space-y-3">
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    Login to{" "}
                    <a
                      href="https://ieee-pdf-express.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      IEEE PDF eXpress
                    </a>
                    .
                  </li>
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    First-time users: Click "New Users &ndash; Click Here", enter
                    the conference-specific Conference ID (to be announced), your
                    email address and a password, and follow the prompts to
                    complete the setup.
                  </li>
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    Returning users should use the same account from previous
                    conferences. Verify your contact information is correct.
                  </li>
                  <li className="text-base sm:text-lg text-gray-900 leading-relaxed">
                    Download the PDF-compliant file from IEEE PDF eXpress and
                    upload it via the CMT Camera-Ready Paper Submission Portal.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  IEEE Copyright Transfer Submission
                </h3>
                <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                  To have your paper included in IEEE Xplore, the
                  corresponding/submitting author must transfer the copyright to
                  IEEE. The IEEE eCF (Electronic Copyright Form) submission is
                  mandatory.
                </p>
                <ul className="mt-3 space-y-3">
                  {[
                    "Login to the CMT Paper Submission Portal.",
                    "Click on IEEE Copyright Link \u2192 Redirects to the IEEE Copyright Form Submission Page.",
                    "Click \"Click here to redirect to the IEEE copyright website\".",
                    "Complete the steps (Step 1 to Step 5) to transfer copyright.",
                    "At the end of Step 5, download the completed IEEE Copyright Form (PDF).",
                    "Upload this PDF file of the Copyright Form back to CMT.",
                    "This completes the IEEE Copyright Transfer. A separate copyright transfer is required for each accepted paper.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base sm:text-lg text-gray-900 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                  <span className="font-semibold">
                    Important formatting instruction:
                  </span>{" "}
                  Do not include "1st", "2nd", etc., with author names. These are
                  placeholders from the IEEE template and should not appear in
                  the final submission.
                </p>
                <p className="mt-3 text-base sm:text-lg font-semibold text-red-600">
                  Failure to comply with the above instructions may result in
                  rejection from IEEE Xplore.
                </p>
              </div>
            </div>
          )}
        </GlassCard>
      </section>
    </div>
  );
}