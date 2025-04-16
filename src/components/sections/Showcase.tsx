import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function Showcase() {
	const sectionRef = useRef<HTMLTableSectionElement>(null)
	const project1Ref = useRef<HTMLDivElement>(null)
	const project2Ref = useRef<HTMLDivElement>(null)
	const project3Ref = useRef<HTMLDivElement>(null)



	useGSAP(() => {
		const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
		projects.forEach((card, index) => {
			gsap.fromTo(card,
				{
					y: 50, opacity: 0
				}, {
				y: 0,
				opacity: 1,
				duration: 1,
				delay: 0.3 * (index + 1),
				scrollTrigger: {
					trigger: card,
					start: "top bottom-=100"
				}
			})
		})
		gsap.fromTo(sectionRef.current, {
			opacity: 0
		}, {
			opacity: 1,
			duration: 1.5
		})
	}, [])

	return <section ref={sectionRef} id="work" className="app-showcase">
		<div className="w-full">
			<div className="showcaselayout">
				<div ref={project1Ref} className="first-project-wrapper">
					<div className="image-wrapper">
						<img src="/images/project1.png" alt="image" />
					</div>
					<div className="text-content">
						<h2>On demand rides made simple with powerfull</h2>
						<p className="text-white-50 md:text-xl">
							some random description
						</p>
					</div>
				</div>
				<div className="project-list-wrapper overflow-hidden">
					<div ref={project2Ref} className="project">
						<div>
							<img src="/images/project2.png" alt="image" />
						</div>
						<h2>Library management</h2>
					</div>
					<div ref={project3Ref} className="project">
						<div>
							<img src="/images/project3.png" alt="image" />
						</div>
						<h2>CMS management</h2>
					</div>
				</div>
			</div>
		</div>
	</section>
}
