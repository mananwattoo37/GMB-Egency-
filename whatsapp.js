// =========================================================
// GMB AGENCY
// WHATSAPP APPOINTMENT SYSTEM
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    const whatsappNumber = "923200147783";

    const appointmentButtons = document.querySelectorAll(
        ".appointment-btn, .book-appointment"
    );

    appointmentButtons.forEach((button) => {

        button.addEventListener("click", (event) => {

            event.preventDefault();

            openAppointmentForm();

        });

    });


    function openAppointmentForm() {

        // Remove existing modal
        const existingModal = document.getElementById(
            "appointmentModal"
        );

        if (existingModal) {
            existingModal.remove();
        }


        // Create modal
        const modal = document.createElement("div");

        modal.id = "appointmentModal";

        modal.innerHTML = `
            <div class="appointment-overlay">

                <div class="appointment-modal">

                    <button
                        type="button"
                        class="appointment-close"
                        id="appointmentClose"
                        aria-label="Close appointment form">
                        ×
                    </button>

                    <div class="appointment-header">

                        <span class="appointment-icon">
                            💬
                        </span>

                        <h2>Book a Consultation</h2>

                        <p>
                            Fill in your details and we'll contact
                            you on WhatsApp.
                        </p>

                    </div>


                    <form id="appointmentForm">

                        <div class="form-group">

                            <label for="appointmentName">
                                Your Name
                            </label>

                            <input
                                type="text"
                                id="appointmentName"
                                placeholder="Enter your name"
                                required>

                        </div>


                        <div class="form-group">

                            <label for="businessName">
                                Business Name
                            </label>

                            <input
                                type="text"
                                id="businessName"
                                placeholder="Enter your business name"
                                required>

                        </div>


                        <div class="form-group">

                            <label for="serviceRequired">
                                Service Required
                            </label>

                            <select
                                id="serviceRequired"
                                required>

                                <option value="">
                                    Select a service
                                </option>

                                <option>
                                    GBP Setup & Verification
                                </option>

                                <option>
                                    GBP Optimization
                                </option>

                                <option>
                                    Google Maps SEO & Ranking
                                </option>

                                <option>
                                    Local SEO Optimization
                                </option>

                                <option>
                                    GMB Audit & Competitor Analysis
                                </option>

                                <option>
                                    GMB Posts & Content Management
                                </option>

                                <option>
                                    Google Reviews & Reputation Management
                                </option>

                                <option>
                                    Local Citations & NAP Management
                                </option>

                                <option>
                                    GMB Suspension & Reinstatement Support
                                </option>

                                <option>
                                    GMB Photos & Media Optimization
                                </option>

                                <option>
                                    GMB Monthly Management & Reporting
                                </option>

                                <option>
                                    Professional Website Design & Development
                                </option>

                            </select>

                        </div>


                        <div class="form-row">

                            <div class="form-group">

                                <label for="appointmentDate">
                                    Preferred Date
                                </label>

                                <input
                                    type="date"
                                    id="appointmentDate"
                                    required>

                            </div>


                            <div class="form-group">

                                <label for="appointmentTime">
                                    Preferred Time
                                </label>

                                <input
                                    type="time"
                                    id="appointmentTime"
                                    required>

                            </div>

                        </div>


                        <div class="form-group">

                            <label for="appointmentMessage">
                                Additional Message
                            </label>

                            <textarea
                                id="appointmentMessage"
                                rows="4"
                                placeholder="Tell us briefly about your business or requirements...">
                            </textarea>

                        </div>


                        <button
                            type="submit"
                            class="appointment-submit">

                            💬 Continue on WhatsApp

                        </button>

                    </form>

                </div>

            </div>
        `;


        document.body.appendChild(modal);


        // Close button
        const closeButton =
            document.getElementById("appointmentClose");

        closeButton.addEventListener("click", () => {
            modal.remove();
        });


        // Close by clicking outside
        modal
            .querySelector(".appointment-overlay")
            .addEventListener("click", (event) => {

                if (
                    event.target.classList.contains(
                        "appointment-overlay"
                    )
                ) {
                    modal.remove();
                }

            });


        // Submit form
        const form =
            document.getElementById("appointmentForm");

        form.addEventListener("submit", (event) => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "appointmentName"
                ).value.trim();

            const business =
                document.getElementById(
                    "businessName"
                ).value.trim();

            const service =
                document.getElementById(
                    "serviceRequired"
                ).value;

            const date =
                document.getElementById(
                    "appointmentDate"
                ).value;

            const time =
                document.getElementById(
                    "appointmentTime"
                ).value;

            const message =
                document.getElementById(
                    "appointmentMessage"
                ).value.trim();


            const formattedMessage =
                `Hello, I would like to book a consultation.

Name: ${name}
Business Name: ${business}
Service Required: ${service}
Preferred Date: ${date}
Preferred Time: ${time}
Additional Message: ${message || "N/A"}

Please let me know the next available step.`;

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${
                    encodeURIComponent(formattedMessage)
                }`;


            window.open(
                whatsappURL,
                "_blank",
                "noopener"
            );

        });

    }

});