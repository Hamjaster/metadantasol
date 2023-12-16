// components/PrivacyPolicy.js

import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-3xl mx-auto text-black py-12 px-4 lg:px-0">
            <div className="text-3xl text-center font-semibold mb-8">Privacy Policy for MetaDatAnSol</div>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Privacy Policy Overview</h2>
                <p className="mb-4">
                    At DataToBiz, accessible from https://www.datatobiz.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by DataToBiz and how we use it.
                </p>
                <p className="mb-4">
                    If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                </p>
                <p className="mb-4">
                    This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in DataToBiz. This policy is not applicable to any information collected offline or via channels other than this website.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Consent</h2>
                <p className="mb-4">
                    By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Information we collect</h2>
                <p className="mb-4">
                    The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                    <br />
                    <br />
                    If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                    <br />
                    <br />

                    When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                    <br />
                    <br />
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How we use your information</h2>
                <p className="mb-4">
                    We use the information we collect in various ways, including to

                    <ul>
                        <li></li>
                    </ul>
                    <ul className='my-4'>
                        <li>
                            ✔ Provide, operate, and maintain our website
                        </li>
                        <li>
                            ✔ Improve, personalize, and expand our website
                        </li>
                        <li>
                            ✔ Understand and analyze how you use our website
                        </li>
                        <li>
                            ✔ Develop new products, services, features, and functionality
                        </li>
                        <li>
                            ✔ Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
                        </li>
                        <li>
                            ✔ Send you emails
                        </li>
                        <li>
                            ✔ Find and prevent fraud
                        </li>
                    </ul>

                </p>
            </section>

            {/* Other sections with appropriate content */}
        </div>
    );
};

export default PrivacyPolicy;
