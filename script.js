
// Initial Job Data
let jobs = [
    { id: 1, company: "Mobile First Corp", role: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130k - $175k", status: "none", desc: "Build cross-platform mobile applications using React Native. Work on products used by millions." },
    { id: 2, company: "WebFlow Agency", role: "Web Designer", location: "Los Angeles, CA", type: "Part-time", salary: "$80k - $120k", status: "none", desc: "Create stunning web experiences for high-profile clients using modern design trends." },
    { id: 3, company: "DataViz Solutions", role: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125k - $165k", status: "none", desc: "Transform complex data into compelling visualizations using D3.js and React." },
    { id: 4, company: "CloudScale Inc", role: "DevOps Engineer", location: "Austin, TX", type: "Full-time", salary: "$140k - $190k", status: "none", desc: "Manage scalable cloud infrastructure and CI/CD pipelines for enterprise clients." },
    { id: 5, company: "Alpha AI", role: "Machine Learning Engineer", location: "Remote", type: "Contract", salary: "$150k - $200k", status: "none", desc: "Develop and deploy LLM-based applications and optimize inference performance." },
    { id: 6, company: "Creative Pulse", role: "UI/UX Designer", location: "New York, NY", type: "Full-time", salary: "$90k - $130k", status: "none", desc: "Lead user research and design wireframes for next-gen fintech platforms." },
    { id: 7, company: "SecureNet", role: "Cybersecurity Analyst", location: "Washington DC", type: "Full-time", salary: "$110k - $150k", status: "none", desc: "Protect critical infrastructure from emerging threats and perform security audits." },
    { id: 8, company: "Growth Engine", role: "Frontend Lead", location: "Remote", type: "Full-time", salary: "$160k - $210k", status: "none", desc: "Architect modern frontend systems and mentor a team of talented junior developers." }
];

let currentFilter = 'all';

function render() {
    const container = document.getElementById('jobs-container');
    const emptyState = document.getElementById('empty-state');
    
    const filteredJobs = jobs.filter(job => {
        if (currentFilter === 'all') return true;
        return job.status === currentFilter;
    });

    // Update Dashboard Counts
    document.getElementById('total-count').innerText = jobs.length;
    document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'interview').length;
    document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'rejected').length;
    document.getElementById('section-count').innerText = filteredJobs.length;

    if (filteredJobs.length === 0) {
        container.innerHTML = "";
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');
    container.innerHTML = filteredJobs.map(job => `
        <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-100 relative">
            <button onclick="deleteJob(${job.id})" class="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition">
                <i class="fa-solid fa-trash-can"></i>
            </button>
            <h4 class="text-xl font-bold text-slate-800">${job.company}</h4>
            <p class="text-blue-600 font-medium mb-2">${job.role}</p>
            <div class="flex flex-wrap gap-4 text-sm text-slate-500 mb-3">
                <span><i class="fa-solid fa-location-dot mr-1"></i>${job.location}</span>
                <span><i class="fa-solid fa-briefcase mr-1"></i>${job.type}</span>
                <span><i class="fa-solid fa-money-bill-wave mr-1"></i>${job.salary}</span>
            </div>
            <span class="inline-block bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded mb-3 uppercase tracking-wider">
                ${job.status === 'none' ? 'Not Applied' : job.status}
            </span>
            <p class="text-slate-600 text-sm mb-4 leading-relaxed">${job.desc}</p>
            <div class="flex gap-3">
                <button onclick="updateStatus(${job.id}, 'interview')" class="px-4 py-2 border-2 border-emerald-500 text-emerald-600 rounded-md font-bold text-sm hover:bg-emerald-50 transition ${job.status === 'interview' ? 'bg-emerald-500 text-white hover:bg-emerald-600' : ''}">INTERVIEW</button>
                <button onclick="updateStatus(${job.id}, 'rejected')" class="px-4 py-2 border-2 border-red-400 text-red-500 rounded-md font-bold text-sm hover:bg-red-50 transition ${job.status === 'rejected' ? 'bg-red-400 text-white hover:bg-red-500' : ''}">REJECTED</button>
            </div>
        </div>
    `).join('');
}
