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
                        {/* Lorem Ipsum content */}
                        </p>
                    </Section>
                    <Section id="Experience" title="EXPERIENCE">
                        {/* Content for the Experience section */}
                    </Section>
                    <Section id="Education" title="EDUCATION">
                        {/* Content for the Experience section */}
                    </Section>
                    <Section id="Skills" title="SKILLS">
                        {/* Content for the Experience section */}
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