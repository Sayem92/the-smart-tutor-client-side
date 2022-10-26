import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="bg-fuchsia-200 text-black">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 text-black"> The Smart Tutor related some Questions and Answer.</p>
                    <div className="space-y-4">
                        <details className="w-full border border-black rounded-lg">
                            <summary className="px-4 py-6 text-blue-600 focus:outline-none focus-visible:ring-violet-400">What vlogging means ?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-900">
                                Vlog stands for a video blog or video log, and refers to a type of blog where most or all of the content is in a video format. Vlog posts consist of creating a video of yourself where you talk on a particular subject such as reporting or reviewing a product or an event. </p>
                        </details>
                        <details className="w-full border border-black rounded-lg">
                            <summary className="px-4 py-6 text-blue-600 focus:outline-none focus-visible:ring-violet-400">What are the 4 types of digital marketing ?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-900">
                                Image result for What is digital marketing ?
                                Digital marketing can be broadly broken into 8 main categories including: Search Engine Optimization, Pay-per-Click, Social Media Marketing, Content Marketing, Email Marketing, Mobile Marketing, Marketing Analytics and Affiliate Marketing </p>
                        </details>
                        <details className="w-full border border-black rounded-lg">
                            <summary className="px-4 py-6 text-blue-600 focus:outline-none focus-visible:ring-violet-400">What is the importance of health and fitness ? </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-900">

                                Regular physical activity is one of the most important things you can do for your health. Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities. </p>
                        </details>
                        <details className="w-full border border-black rounded-lg">
                            <summary className="px-4 py-6 text-blue-600 focus:outline-none focus-visible:ring-violet-400">   What is the purpose of gaming ? </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-900">
                                Playing video games fulfills a purpose in their lives. This could include gaming for: relaxation, opportunities to exert control, enjoyment, creativity, socialization, prevent boredom, challenge, and achievement. It could also be used as a coping method or stress management. </p>
                        </details>
                        <details className="w-full border border-black rounded-lg">
                            <summary className="px-4 py-6 text-blue-600 focus:outline-none focus-visible:ring-violet-400"> Who is a fashion make up artist ? </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-900">

                                A fashion makeup artist works with clients in a studio, on set, or in their homes. As a fashion makeup artist, you do makeup for a model on location at a shoot. You use a product to suit the needs of a client. Your responsibilities include a thorough understanding of the latest cosmetic and beauty trends. </p>
                        </details>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;