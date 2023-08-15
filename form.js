let studentName = '';
let phoneNumber = '';
let address = '';
let selectedCourse = '';

const submittedData = [];

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (validateForm()) {
      const data = {
        studentName: studentName,
        phoneNumber: phoneNumber,
        address: address,
        selectedCourse: selectedCourse
      };
      submittedData.push(data);

      console.log("Form submitted!");
      console.log("Submitted Data:", submittedData);

      window.location.href = 'index.html';
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });
});

function validateForm() {
  const inputs = document.querySelectorAll("input, textarea, select");
  for (const input of inputs) {
    if (!input.value.trim()) {
      return false;
    }
  }
  return true;
}

function openModal(option) {
  if (option === 'STUDENT NAME') {
    if (studentName) {
      document.getElementById('modal-title').innerText = 'STUDENT NAME';
      document.getElementById('modal-content').innerText = studentName;
      document.getElementById('modal').style.display = 'flex';
    } else {
      window.location.href = 'student.html';
    }
  } else if (option === 'PHONE') {
    if (phoneNumber) {
      document.getElementById('modal-title').innerText = 'PHONE';
      document.getElementById('modal-content').innerText = phoneNumber;
      document.getElementById('modal').style.display = 'flex';
    } else {
      window.location.href = 'phone.html';
    }
  } else if (option === 'ADDRESS') {
    if (address) {
      document.getElementById('modal-title').innerText = 'ADDRESS';
      document.getElementById('modal-content').innerText = address;
      document.getElementById('modal').style.display = 'flex';
    } else {
      window.location.href = 'address.html';
    }
  } else if (option === 'COURSE') {
    if (selectedCourse) {
      document.getElementById('modal-title').innerText = 'COURSE';
      document.getElementById('modal-content').innerText = selectedCourse;
      document.getElementById('modal').style.display = 'flex';
    } else {
      window.location.href = 'course.html';
    }
  }
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function updateStudentName(name) {
  studentName = name;
}

function updatePhoneNumber(number) {
  phoneNumber = number;
}

function updateAddress(addr) {
  address = addr;
}

function updateSelectedCourse(course) {
  selectedCourse = course;
}

function submitStudentNameForm() {
  const studentNameInput = document.getElementById('studentName');
  if (studentNameInput.value.trim()) {
    updateStudentName(studentNameInput.value);
    window.location.href = 'index.html';
  } else {
    alert("Please enter a student name.");
  }
}

function submitPhoneNumberForm() {
  const phoneNumberInput = document.getElementById('phoneNumber');
  if (phoneNumberInput.value.trim()) {
    updatePhoneNumber(phoneNumberInput.value);
    window.location.href = 'index.html';
  } else {
    alert("Please enter a phone number.");
  }
}

function submitAddressForm() {
  const addressInput = document.getElementById('address');
  if (addressInput.value.trim()) {
    updateAddress(addressInput.value);
    window.location.href = 'index.html';
  } else {
    alert("Please enter an address.");
  }
}

function submitCourseForm() {
  const courseSelect = document.getElementById('course');
  if (courseSelect.value) {
    updateSelectedCourse(courseSelect.value);
    window.location.href = 'index.html';
  } else {
    alert("Please choose a course.");
  }
}
