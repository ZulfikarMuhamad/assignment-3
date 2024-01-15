import Sidebar from "../components/sidebar"
import Section from "../components/section"

const Home = () => {
    return(
        <div className="grid grid-cols-12 h-screen relative">
            <div className="col-start-1 col-span-2 overscroll-none">
                <Sidebar className="sticky top-0" />
            </div>
            <div className="col col-start-3 col-span-10 overflow-auto">
                <div className="h-screen overscroll-contain">
                    <Section id="About" title="Muhamad Zulfikar Firdaus">
                        <small className="text-lg">+6281320078285</small>
                        <p className="mt-12">
                        With an impressive 5 years of hands-on experience, I stands out as a highly skilled and versatile developer in the dynamic field of software engineering. As a dedicated Front-End Developer, I adeptly navigates the intricacies of .NET Core, Laravel, and React, crafting engaging and intuitive user interfaces that captivate and delight users.
                        <br/><br/>
                        In the realm of back-end development, I'am a proficient user of .NET Core and Go, leveraging these powerful technologies to create robust, scalable, and high-performance systems. I mastery of SQL adds a layer of data management finesse, ensuring seamless integration and efficient handling of complex databases.
                        <br/><br/>
                        The artistic touch is not lost on me, who effortlessly combines the versatility of Tailwind CSS with the time-tested reliability of Bootstrap to shape visually stunning and responsive designs. This meticulous attention to detail extends beyond functionality, ensuring that each project is not only technically sound but also aesthetically pleasing.
                        <br/><br/>
                        Known for a commitment to staying abreast of industry trends and best practices, I'am a valuable asset in any development team. I have ability to seamlessly integrate various technologies, from front-end frameworks to back-end languages, showcases a holistic understanding of the development lifecycle. With a proven track record of successful projects, I continues to contribute to the ever-evolving landscape of software development, delivering solutions that exceed expectations.
                        
                        </p>
                    </Section>
                    <Section id="Experience" title="EXPERIENCE">
                        <div className="mt-12">
                            <ul>
                                <li className=" mb-8">
                                    <div className="flex flex-col gap-2 mb-4">
                                        <div className="flex justify-between">
                                            <h2 className=" font-semibold">PT. Bank Raya Indonesia Tbk</h2>
                                            <p className="font-semibold text-orange-800">Digital Banking & Delivery Officer</p>
                                        </div>
                                        <div>
                                            Become part of the squad payment in the VISA project as a payment method at Bank Raya in order to support the company's digital transformation. I am responsible for developing payment gateways using GoLang as a backend system that integrates with core banking and VISA, coordinates with stakeholders in planning system flow, conducts system integration tests, and reports to project managers and squad leaders
                                        </div>
                                    </div>
                                    <hr/>
                                </li>
                                <li className="mb-8">
                                    <div className="flex flex-col gap-2 mb-4">
                                        <div className="flex justify-between">
                                            <h2 className=" font-semibold">PT. ACA Pacific Indonesia</h2>
                                            <p className="font-semibold text-orange-800">Fullstack Developer</p>
                                        </div>
                                        <p>
                                        1). Developing main website for Asia Pacific regional company with team colaborating under ASP.NET MVC Framework (aca-pacific.com); 2). Managing main website and work on user requirement for 4 regional country company at Indonesia, Malaysia, Singapore and Thailand built in Sitefinity CMS (www.aca-apac.com); 3). Managing ACA Pacific Indonesia Online Store (www.aca-store.com); 4). Success developing web based application built on .NET framework for some product partnership program sales that used by partner to make order to ACA Pacific (www.acapartenrportal.com); 5).Developing local marketing website for some product sell by the company such as : - SketchUp (www.sketchup-aca.com) - Alcatel Lucent Enterprise (www.alcatelkomunikasi.com);
                                        </p>
                                    </div>
                                    <hr/>
                                </li>
                                <li>
                                    <div className="flex flex-col gap-2 mb-4">
                                        <div className="flex justify-between">
                                            <h2 className=" font-semibold">PT. Inti Data Utama</h2>
                                            <p className="font-semibold text-orange-800">Technical Consultant SAP Business One</p>
                                        </div>
                                        <div>
                                        Consulting client about technical information of ERP System SAP Business One as :
                                        1). Customization database structure of system. 
                                        2). Developing custom report with Crystal Reports. 
                                        3). Developing custom application that integrated with SAP Business One called internal or external add-ons including Mobile application (Android Studio Native), Web Services (RESTful API with .NET MVC Framework WEB Application), Service Application on Windows, Point of Sales (POS) staging programs, desktop application, API Gateways with (Flask Python). 
                                        4). Writing techincal documentation.
                                        </div>
                                    </div>
                                    <hr/>
                                </li>
                            </ul>
                        </div>
                        
                    </Section>
                    <Section id="Education" title="EDUCATION">
                        <div className="grid grid-cols-12 mt-12 gap-2">
                            <div className="col">
                                <img src="https://media.licdn.com/dms/image/C510BAQHCG0Nj-BGSCg/company-logo_100_100/0/1631415186179/universitaspendidikanindonesia_upi_logo?e=1713398400&v=beta&t=e5I_wMnz9PZPg4zKbOr14nqCM3kbDqzTdd1YSVq-qao" alt="upi" className="w-full"></img>
                            </div>
                            <div className="col-start-2 col-span-11">
                                <div className="flex flex-col">
                                    <h2 className=" font-semibold">Universitas Pendidikan Indonesia</h2>
                                    <p className="font-semibold text-orange-800">Bachelor's Degree, Computer Science</p>
                                    <p className=" font-light">2014 - 2018</p>
                                </div>
                            </div>
                        </div>
                        
                    </Section>
                    <Section id="Skills" title="SKILLS">
                        <div className="mt-12">
                            <ul>
                                <li>React</li>
                                <li>.Net</li>
                                <li>Go</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                    </Section>
                    <Section id="Interest" title="INTEREST">
                        {/* Content for the Experience section */}
                    </Section>
                    <Section id="Awards" title="AWARDS">
                        {/* Content for the Experience section */}
                    </Section>
                </div>
            </div>
        </div>

       
    )
}

export default Home