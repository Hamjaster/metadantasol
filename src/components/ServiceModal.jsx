import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'

export default function Service({ isOpen, onClose, service }) {

    const returnServiceData = (s) => {
        switch (s) {
            case "data-engineering":
                return (
                    <section className="py-12 font-opensans">

                        <div className="container mx-auto px-4 w-full">
                            <div className="text-center mx-auto mb-24">
                                <h2 className="text-5xl font-bold text-[#0083e8] mb-4">Data Engineering Services</h2>
                                <p className="text-xl text-gray-600">
                                    In today's data-driven world, we transform raw data into actionable insights.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-3xl font-bold text-[#002644] mb-4">What is Data Engineering?</h3>
                                    <p className="text-gray-700 text-xl">
                                        Data Engineering is the process of collecting, cleaning, and transforming raw data into a structured format that is ready for analysis. Our expert team at Metadatan Solutions specializes in delivering top-tier Data Engineering services tailored to meet your organization's unique needs.
                                    </p>
                                    <p className="text-gray-700 text-xl mt-4">
                                        Our Data Engineers play a pivotal role in ensuring data quality, scalability, and accessibility within your organization. Whether you're initiating your data journey or seeking to fortify your existing infrastructure, we're here to help you leverage the power of your data.
                                    </p>
                                    <p className="text-gray-700 text-xl mt-4">
                                        Partner with us and harness the true potential of your data through effective Data Engineering. Your data journey begins here.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-[#002644] mb-4">Why is Data Engineering Needed?</h3>
                                    <ul className="text-gray-700 text-xl">
                                        <li className="mb-2"> <span className='underline'> Data Quality</span> : Raw data is often messy and inconsistent. Data Engineering ensures data is cleaned and standardized for accurate analysis.</li>
                                        <li className="mb-2"> <span className='underline'> Scalability :</span> As organizations grow, so does their data. Data Engineering provides the scalability required to handle large volumes of information.</li>
                                        <li className="mb-2"> <span className='underline'> Efficiency :</span> It automates the data preparation process, saving time and resources, and allows for real-time data processing.</li>
                                        <li className="mb-2"> <span className='underline'> Data Integration</span> : It connects data from various sources, providing a comprehensive view for analysis.</li>
                                        <li>Data Accessibility: It makes data available to all stakeholders, promoting data-driven decision-making.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </section>
                );
            case "data-analysis":
                return (
                    <section className="py-16 font-opensans">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-24 mx-auto">
                                <h2 className="text-5xl font-bold text-[#0083e8] mb-4">Data Analysis Services</h2>
                                <p className="text-xl text-gray-600">
                                    In today's data-driven world, Data Analysis is your compass for making informed decisions and unlocking potential.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-3xl font-bold text-[#002644] mb-4">Uncovering Hidden Insights</h3>
                                    <p className="text-xl text-gray-700">
                                        Data Analysis delves deep into your data, revealing insights and patterns that were previously undetected. It transforms raw data into actionable information, enabling you to make informed choices.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-[#002644] mb-4">Industry-Leading Tools & Customized Dashboards</h3>
                                    <p className="text-xl text-gray-700">
                                        We harness industry-leading data visualization tools like Power BI, Tableau, Looker, or SAP Analytics. These tools are selected based on your organization's unique needs, ensuring you have the best resources at your disposal.

                                    </p>
                                </div>
                            </div>
                            <div className="mt-16">
                                <h2 className="text-4xl font-bold text-[#002644] mb-4">How We Can Transform Your Data</h2>
                                <p className="text-xl text-gray-700">
                                    Metadatan Solutions offers a team of experienced BI professionals who can elevate your organization into a data-driven powerhouse. We're here to redefine the way you perceive and utilize your data.
                                    Our recommended tools offer interactive dashboards, data reports, visual analytics, and self-service analytics that empower your decision-making abilities. With us as your partner, you'll experience a transformation in how you approach data, unlocking its full potential to drive your organization's success. Welcome to the world of effective data analysis, where your data becomes your greatest asset.
                                </p>
                            </div>
                        </div>
                    </section>
                )
            case "data-science":
                return (
                    <section className="py-16 font-opensans">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-12 mx-auto">
                                <h2 className="text-5xl font-bold text-[#0083e8] mb-4">Data Science Services</h2>
                                <p className="text-lg text-gray-600">
                                    Uncover profound insights and drive innovation with our Data Science expertise.
                                </p>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-3xl font-bold text-[#002644] mb-4">Why Choose Data Science for Your Enterprise?</h3>
                                <ul className="list-disc mx-7 text-lg text-gray-700">
                                    <li>
                                        <span className="font-semibold">AI Platform Customization:</span> Our team of expert data scientists and engineers stands ready to assist you in AI development and the design of pilot projects. We tailor AI platforms to suit your unique needs, whether it's to boost sales or enhance marketing performance.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Supercharged Supply Chain:</span> For those seeking to empower supply chain analytics, AI is a formidable ally. It enables supply chain executives to adopt a data-driven approach, effectively resolving complex problems that were once deemed unsolvable.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Enhanced Customer Engagement:</span> Metadatan Solutions offers expertise in leveraging AI/ML/Analytics tools to discern customer needs. These tools not only help attract new customers but also nurture loyalty and retention.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Innovative Product Development:</span> Data Science tools yield in-depth insights that empower you to launch new products tailored to market demands, giving your business a competitive edge.
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-[#002644] mb-4">The Data Science Advantage</h2>
                                <p className="text-lg text-gray-700">
                                    In the modern landscape, data science stands as a bridge between raw data and insightful decision-making. It's a powerful process that employs sophisticated techniques to refine, evaluate, and model data, ultimately revealing valuable insights. With the integration of AI and ML, data science has become a driving force behind business optimization, innovation, and strategic transformation.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-[#002644] mb-4">How Can We Help Your Data-Driven Journey?</h2>
                                <p className="text-lg text-gray-700">
                                    Embark on a transformative data-driven journey with Metadatan Solutions. Our seasoned team of data scientists and engineers is ready to tailor AI development to your unique business objectives, from conceptualizing projects to designing pilot initiatives. We specialize in supercharging supply chain analytics, adopting a data-driven approach to resolve complex challenges and optimize operations. With expertise in leveraging AI/ML/Analytics tools, we focus on understanding and fulfilling your customers' needs, nurturing loyalty, and driving retention. Gain a competitive edge through our Data Science tools, which provide deep insights for innovative product development aligned with market demands. Partner with us to unleash the full potential of data science and artificial intelligence for your enterprise.
                                </p>
                            </div>
                        </div>
                    </section>
                )
            case "custom-software":
                return (
                    <section className="py-16 font-opensans">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-20 mx-auto">
                                <h2 className="text-5xl font-bold text-[#0083e8] mb-4">Custom Software Solutions</h2>
                                <p className="text-lg text-gray-600">
                                    Tailored software solutions designed to meet your organization's unique challenges.
                                </p>
                            </div>
                            <div className="mb-8">
                                <h2 className="text-4xl font-bold text-gray-800 mb-4">How We Can Assist You</h2>
                                <ul className="list-disc mx-8 text-lg text-gray-700">
                                    <li>
                                        <span className="font-semibold">Process Automation:</span> In an era of digital transformation, process automation is paramount. Our custom software solutions can streamline your operations, reducing manual intervention and enhancing overall efficiency.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Fraud Detection:</span> Protecting your business from fraud is a top priority. Our customized software can integrate advanced fraud detection algorithms, safeguarding your financial assets and customer trust
                                    </li>
                                    <li>
                                        <span className="font-semibold">Personalized Data Analytics Tools:</span> Our team can create data analytics software tailored to your industry and specific requirements. These tools can empower you with in-depth insights and decision-making capabilities.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Customer Relationship Management (CRM) Systems:</span> We design and develop CRM software that enhances your interactions with customers, improving customer satisfaction and loyalty.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-4">Partner with Us</h2>
                                <p className="text-lg text-gray-700">
                                    With Metadatan Solutions as your partner, expect custom software solutions that precisely address your business needs, ensuring seamless operations and readiness for industry challenges.
                                </p>
                            </div>
                        </div>
                    </section>
                )
            default:
                break;
        }
    }

    return (
        <>
            <Modal size={'full'} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>

                    <ModalCloseButton />

                    <ModalBody>
                        {
                            returnServiceData(service)
                        }
                    </ModalBody>


                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}