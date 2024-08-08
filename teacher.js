import { db } from '../firebase-config.js';
import { collection, addDoc, updateDoc, doc, getDocs, query, where } from "firebase/firestore";

// Schedule appointment
document.getElementById('schedule-appointment-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const studentName = document.getElement
