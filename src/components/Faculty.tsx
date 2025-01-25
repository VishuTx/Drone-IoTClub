import React from 'react';

const Faculty = () => {
  return (
    <section className="team-section bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Faculty Advisor</h2>
        
        <div className="flex flex-wrap -mx-4">
          {/* Team Member Section */}
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <div className="team-card bg-black shadow-lg rounded-lg p-6 text-center">
              <img
                src="assets/images/faculty.jpg"
                alt="Prof. S K Soni"
                className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
              />
              <p className="text-purple-600 font-semibold mb-2">Faculty Advisor</p>
              <h5 className="text-xl font-bold mb-2">Prof. S K Soni</h5>
              <p className="text-gray-600">
                HOD Electronics & Communication Engineering
              </p>
              
            </div>
          </div>

          {/* Description Section */}
          <div className="w-full lg:w-2/3 px-4">
            <div className="team-card bg-blue shadow-lg rounded-lg p-6">
              <h5 className="text-xl font-bold mb-4">
                Message from the Desk of Prof. S K Soni
              </h5>
              <p className="text-gray-700 leading-relaxed">
                As the Faculty Advisor and Head of the Department of Electronics & Communication Engineering at Madan Mohan Malaviya University of Technology, I am dedicated to ensuring that our students receive the highest quality education. Our department is at the forefront of research in Wireless Communication and 5G Networks, and we strive to impart both theoretical knowledge and practical skills to help students thrive in these rapidly evolving fields.
                <br />
                <br />
                I take pride in the success of our students and look forward to continuing our mission of academic excellence and research-driven education.
                <br />
                <br />
                Warm regards,
                <br />
                Prof. S K Soni
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
