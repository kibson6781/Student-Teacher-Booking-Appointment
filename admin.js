import { db } from '../firebase-config.js';
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

// Add teacher
document.getElementById('add-teacher-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const subject = document.getElementById('subject').value;

    try {
        await addDoc(collection(db, "teachers"), { name, department, subject });
        alert("Teacher added successfully!");
    } catch (e) {
        console.error("Error adding teacher: ", e);
    }
});

// Approve student
document.getElementById('approve-student-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const studentId = document.getElementById('student-id').value;

    try {
        const studentRef = doc(db, "students", studentId);
        await updateDoc(studentRef, { approved: true });
        alert("Student approved successfully!");
    } catch (e) {
        console.error("Error approving student: ", e);
    }
});
