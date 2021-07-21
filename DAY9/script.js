const seatsEl = document.querySelectorAll(".seats");
seatsEl.forEach((seats) =>
	seats.addEventListener("click", () => {
		seats.classList.toggle("seatsclicked");
	    let bookedSeatsNumber = document.querySelectorAll(".seatsclicked").length;
	    let remainingSeatsNumber = 36 - bookedSeatsNumber;
	    let bookedSeatsValue = document.querySelector(".seatsbooked_");
	    let remainingSeatsValue = document.querySelector(".seatsleft_");
		bookedSeatsValue.textContent = bookedSeatsNumber;
		remainingSeatsValue.textContent = remainingSeatsNumber;
	})
)