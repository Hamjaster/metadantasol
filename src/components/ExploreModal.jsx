import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

export default function ExploreModal({ isOpen, onClose }) {


    return (
        <>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={{ sm: 'full', md: "lg" }} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Book An Audit With Us</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <div className="">
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#444fff]"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="workEmail" className="block text-gray-700 font-medium mb-2">
                                        Work Email
                                    </label>
                                    <input
                                        type="email"
                                        id="workEmail"
                                        name="workEmail"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#444fff]"
                                        placeholder="Enter your work email"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#444fff]"
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="howCanWeHelp" className="block text-gray-700 font-medium mb-2">
                                        How can we help you?
                                    </label>
                                    <textarea
                                        id="howCanWeHelp"
                                        name="howCanWeHelp"
                                        rows="4"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#444fff]"
                                        placeholder="Please describe your query or request"
                                        required
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <button
                            type="submit"
                            className="w-full bg-[#444fff] text-white py-2 rounded-md transition duration-300 hover:bg-[#444fff]"
                        >
                            Submit
                        </button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}