const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skillsList = document.getElementById('skills-list') as HTMLUListElement;

toggleSkillsBtn.addEventListener('click', () => {
    if (skillsList.style.display === 'none' || skillsList.style.display === '') {
        skillsList.style.display = 'block';
    } else {
        skillsList.style.display = 'none';
    }
});
