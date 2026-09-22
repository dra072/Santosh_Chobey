import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "./API";
import { Toaster, toast } from "react-hot-toast";

import logo from "./assets/aisect_logo.png";
import img1 from "./assets/sir1.webp";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.webp";
import img4 from "./assets/img4.webp";

import pic1 from "./assets/profile1.JPG";
import pic2 from "./assets/profile2.JPG";
import pic3 from "./assets/profile3.JPG";
import pic4 from "./assets/profile4.JPG";
import pic5 from "./assets/profile5.JPG";
import pic6 from "./assets/profile6.JPG";


function App() {
  const [wishes, setWishes] = useState([]);
  const [isFormVisible, setisFormVisible] = useState(false);
  const [isLiveOpen, setIsLiveOpen] = useState(false);

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchWishes = async () => {
    try {
        const response = await axios.get(`${API}/wishes`);
        setWishes(response.data);

    } catch (error) {
        console.error("Error fetching wishes:", error);
    }
};

useEffect(() => {
    fetchWishes();
    // const interval = setInterval(() => {
    //     fetchWishes();
    // }, 2000);

    // return () => {
    //     clearInterval(interval);
    // };
}, []);

useEffect(() => {

    if (!isLiveOpen) {
      console.log("open nhi hai");
        return;
    }

    console.log("open hai");

    fetchWishes();

    const interval = setInterval(() => {
        fetchWishes();
    }, 3000);

    return () => {
        clearInterval(interval);
    };

}, [isLiveOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(name, designation, message,);
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/addwish`, { name, designation, message, });
      toast.success("Birthday wish!");
      resetForm();

    } catch (error) {
      console.error("There was an error fetching application Details:", error);
      toast.error("Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName("");
    setDesignation("");
    setMessage("");
    setisFormVisible(false);
  };



  return (
    <>
      <Toaster />

      <section id="Header">
        <div className="navbar">
          <img src={logo} alt="AISECT" />
          <button className="bluebtn" onClick={() => setisFormVisible(true)} >Send Wish</button>
        </div>
      </section>

      <section id="Hero">
        <h4>By the Department of CS & IT</h4>
        <h1>Celebrating the Visionary <br /> <span>Hon. Shri Santosh Choubey Ji</span></h1>
        <p>"Social Entrepreneur • Technocrat • Celebrated Hindi Author • Chancellor & Educational Pioneer"</p>
        <div>
          <img src={img2} alt="Hon'ble Chancellor Shri Santosh Choubey" />
        </div>
      </section>

      <section id="Impact">
        <h4>Legacy & Vision</h4>
        <h2>Architect of Grassroots Digital Empowerment</h2>
        <div className="card">
          <div>
            <i className="fa fa-graduation-cap"></i>
            <h3>IITian & Civil Servant Turned Reformer</h3>
            <hr />
            <p>
              An alumnus of IIT Delhi who qualified both the Indian Engineering Services (IES) and Civil Services. He chose public mission over administrative comfort, founding AISECT in 1985 to take computing to India’s semi-urban and rural heartlands.
            </p>
          </div>
          <div>
            <i className="fa fa-university"></i>
            <h3>Architect of World-Class Institutions</h3>
            <hr />
            <p>
              Visionary behind the AISECT Group of Universities, including Rabindranath Tagore University (RNTU) and Dr. C.V. Raman University—pioneering accessible higher education, multi-disciplinary research, and skill ecosystems across multiple states.
            </p>
          </div><div>
            <i className="fa fa-book"></i>
            <h3>Literary Luminary & Global Cultural Patron</h3>
            <hr />
            <p>
              Recipient of the Dushyant Kumar and Spandan Sahitya Kriti awards for seminal novels and poetry. He conceived <em>Vishwa Rang</em>, taking Indian languages, arts, and literature to an international audience across 50+ countries.
            </p>
          </div><div>
            <i className="fa fa-code"></i>
            <h3>Pioneer of Vernacular Computing</h3>
            <hr />
            <p>
              Recognized early that language should never be a barrier to technology. He pioneered localized Hindi and regional software, empowering millions of rural youth with direct careers in the IT economy.
            </p>
          </div>
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </section>

      <section id="Message">
        <div className="first">
          <h4>Institutional Respect</h4>
          <h2>Message from the Department of CS & IT</h2>
          <div>
            <strong>Respected Chancellor Sir,</strong>
            <p>On this auspicious day, the faculty, scholars, and students of the <span>Department of Computer Science & Information Technology</span> extend our deepest reverence and warmest birthday wishes.</p>
            <p>In computer science, we often speak of architectures, optimization, and scalable algorithms. Yet, when we look upon your lifetime journey, we see the ultimate algorithm of leadership: one that optimizes human dignity, expands accessibility for those previously left behind, and bridges the cold logic of silicon with the warm tenderness of Hindi poetry.</p>
            <p>When personal computing was still in its infancy, you democratized IT for rural India. As we build on artificial intelligence, data systems, and next-generation architectures today, we are guided by your enduring vision that technological innovation must always serve humanity first.</p>
            <p><i><span>"We pray for your vibrant health, enduring wisdom, and continued inspiration as you lead generations toward enlightenment and purposeful education."</span></i></p>

            <hr />

            <p>Faculty, Researchers & Students <br /> <span>Department of Computer Science & Information Technology</span></p>
          </div>

        </div>

        <div className="second">
          <h4>Leadership & Faculty Messages</h4>
          <h2>Departmental Wall of Honor </h2>
          <div className="card">

            <div className="item">
              <div className="text">
                <p>"Happy Birthday, Respected Chancellor Sir! Your vision of democratizing technology inspires our department daily to align academic research with societal impact."</p>
              </div>
              <div className="details">

                <span>Uday Ranjan<br /> <i>Dean, CS & IT</i></span>
                <img src={pic1} alt="" />
              </div>
            </div><div className="item">
              <div className="text">
                <p>"Warmest birthday greetings, Sir. Your work in rural IT literacy taught us that true technical achievement lies in breaking boundaries for the common citizen."</p>
              </div>
              <div className="details">

                <span>Ravikant Kumar <br /> <i>Head of Department, CS & IT</i></span>
                <img src={pic2} alt="" />
              </div>
            </div><div className="item">
              <div className="text">
                <p>"Wishing you good health and long life, Sir. Your harmonious blend of technology and literature shows our students what true holistic intellect looks like."</p>
              </div>
              <div className="details">

                <span>Vijay Lal<br /> <i>Assistant Professor, CS & IT</i></span>
                <img src={pic3} alt="" />
              </div>
            </div><div className="item">
              <div className="text">
                <p>"Heartiest birthday respects to our mentor and guide. May your relentless pursuit of knowledge continue to spark curiosity in our classrooms and labs."</p>
              </div>
              <div className="details">
                <span>Prabhat Kumar<br /> <i>Assistant Professor, CS & IT</i></span>
                <img src={pic4} alt="" />
              </div>
            </div>
            <div className="item">
              <div className="text">
                <p>"A very happy birthday to the visionary leader who proved that vernacular empowerment is the strongest foundation for nation-building in the digital age."</p>
              </div>
              <div className="details">
                <span>Ajay Kumar<br /> <i>Assistant Professor, CS & IT</i></span>
                <img src={pic5} alt="" />
              </div>
            </div>

            <div className="item">
              <div className="text">
                <p>"Respectful birthday wishes to Chancellor Sir. Your dedication to hands-on skill development fuels our commitment to practical technical training every day."</p>
              </div>
              <div className="details">

                <span>Danish Raja Akhtar <br /> <i>Lab Instructor, CS & IT</i></span>
                <img src={pic6} alt="" />
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="Footer">
        <div>
          {/* <img src={logo} alt="" /> */}
          <h1>Department of CS & IT</h1>
          <p>Commemorative platform celebrating the birth anniversary of our Chancellor, <br /> Hon'ble Shri Santosh Choubey Ji. <br />AISECT Group of Universities.</p>
          <p>Technology • Literature • Institutional Excellence</p>
        </div>
      </section>

      {isFormVisible && (
        <div id="wishform">
          <form onSubmit={handleSubmit}>
            <div >
              <strong>Celebrate Together</strong>
              <span onClick={resetForm}>✖</span>
            </div>
            <h2>Send Your Birthday Tribute</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" required />
            <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="Enter your Designation" required />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your tribute or birthday wish..." required rows="3" ></textarea>
            <input type="submit" className="bluebtn" value={isSubmitting ? "Submitting..." : "Submit Birthday Wish"} disabled={isSubmitting} />
          </form>
        </div>
      )}

      <div id="Live">
        <details  onToggle={(e) => setIsLiveOpen(e.currentTarget.open)}>
          <summary>LIVE WISHES STREAM</summary>
          <div className="livewishes">

            {wishes.map((wish) => (
            <div key={wish._id}>
              <strong>{wish.name}</strong>
            <span>{wish.designation}</span>
            <i>{wish.message}</i>
            <span>{new Date(wish.createdAt).toLocaleString("en-IN", {day: "2-digit",month: "short",year: "numeric",hour: "2-digit",minute: "2-digit",hour12: true})}</span>
            </div>
            ))}
          </div>
        </details>
      </div>

    </>
  )
}

export default App
