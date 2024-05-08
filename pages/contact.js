import Layout from "@/components/Layout";
import React from "react";

export default function Contact() {
  return (
    <Layout
      active="contact"
      title={"Contact New Age Fabrication"}
      description={
        "Wellington based New Age Fabrication specializes in fabrication of metal for truck decks, truck toolboxes, balustrades, stair rails, gates, pregolas, beams, and portals for houses and boat repairs. "
      }
    >
      <div className="flex items-center justify-center w-full mt-40">
        <div className="flex flex-col lg:flex-row max-w-[1200px] w-full space-y-10 lg:space-y-0">
          <div className="flex flex-col p-6 lg:p-0 items-start w-full max-w-[1200px] gap-y-16">
            <h2 className="font-semibold text-2xl">Our Location</h2>

            <div className="flex flex-col text-lg">
              <span>New Age Fabrication Ltd,</span>
              <br />
              <span>9c Simmons Grove,</span>
              <br />
              <span>Wainuiomata,</span>
              <br />
              <span>Wellington 5014</span>
            </div>

            <div className="flex flex-col text-lg">
              <span>Email: admin@newagefabrication.co.nz</span>
              <br />
              <span>Phone (Brian): 021 127 1496 </span>
            </div>

            <div className="flex flex-col text-lg">
              <span>Open hours:</span>
              <br />
              <span>Monday - Friday</span>
              <br />
              <span>8:30 AM to 5:00 PM</span>
            </div>
          </div>

          <div className="flex justify-center items-center lg:items-start w-full  gap-y-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5998.103461823101!2d174.9422103768387!3d-41.264209539006245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d47561c72e07e6b%3A0xd37344669203835b!2sNew%20Age%20Fabrication%20Ltd!5e0!3m2!1sen!2snz!4v1714901444040!5m2!1sen!2snz"
              className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
