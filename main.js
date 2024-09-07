var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
var skillsList = document.getElementById('skills-list');
toggleSkillsBtn.addEventListener('click', function () {
    if (skillsList.style.display === 'none' || skillsList.style.display === '') {
        skillsList.style.display = 'block';
    }
    else {
        skillsList.style.display = 'none';
    }
});
