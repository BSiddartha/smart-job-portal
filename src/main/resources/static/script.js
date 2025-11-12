const API_URL = "http://localhost:8080/api/jobs";

// ✅ Load jobs when page opens
window.onload = loadJobs;

// ✅ Fetch All Jobs
async function loadJobs() {
  const response = await fetch(`${API_URL}/all`);
  const jobs = await response.json();
  displayJobs(jobs);
}

// ✅ Display Jobs
function displayJobs(jobs) {
  const tableBody = document.querySelector("#jobTable tbody");
  tableBody.innerHTML = "";

  jobs.forEach(job => {
    const row = `
      <tr>
        <td>${job.id}</td>
        <td>${job.title}</td>
        <td>${job.company}</td>
        <td>${job.location}</td>
        <td>₹${job.salary.toLocaleString()}</td>
        <td>
          <button class="edit-btn" onclick="openEditModal(${job.id}, '${job.title}', '${job.company}', '${job.location}', ${job.salary})">✏️ Edit</button>
          <button class="delete-btn" onclick="deleteJob(${job.id})">🗑️ Delete</button>
        </td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// ✅ Add Job
async function addJob() {
  const title = document.getElementById("title").value;
  const company = document.getElementById("company").value;
  const location = document.getElementById("location").value;
  const salary = document.getElementById("salary").value;

  const job = { title, company, location, salary: parseFloat(salary) };

  await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job)
  });

  alert("✅ Job added successfully!");
  loadJobs();
}

// ✅ Delete Job
async function deleteJob(id) {
  if (confirm("Are you sure you want to delete this job?")) {
    await fetch(`${API_URL}/delete/${id}`, { method: "DELETE" });
    alert("🗑️ Job deleted!");
    loadJobs();
  }
}

// ✅ Edit Popup
function openEditModal(id, title, company, location, salary) {
  document.getElementById("editId").value = id;
  document.getElementById("editTitle").value = title;
  document.getElementById("editCompany").value = company;
  document.getElementById("editLocation").value = location;
  document.getElementById("editSalary").value = salary;
  document.getElementById("editModal").style.display = "flex";
}

// ✅ Close Popup
function closeModal() {
  document.getElementById("editModal").style.display = "none";
}

// ✅ Update Job
async function updateJob() {
  const id = document.getElementById("editId").value;
  const title = document.getElementById("editTitle").value;
  const company = document.getElementById("editCompany").value;
  const location = document.getElementById("editLocation").value;
  const salary = document.getElementById("editSalary").value;

  const job = { title, company, location, salary: parseFloat(salary) };

  await fetch(`${API_URL}/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job)
  });

  alert("✅ Job updated successfully!");
  closeModal();
  loadJobs();
}
