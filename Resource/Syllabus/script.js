function toggleModule(moduleId) {
    var moduleContent = document.getElementById('module' + moduleId);
    if (moduleContent.style.display === 'none' || moduleContent.style.display === '') {
        moduleContent.style.display = 'block';
    } else {
        moduleContent.style.display = 'none';
    }
}

function toggleInfo(infoId) {
    var infoContent = document.getElementById('info' + infoId);
    if (infoContent.style.display === 'none' || infoContent.style.display === '') {
        infoContent.style.display = 'block';
    } else {
        infoContent.style.display = 'none';
    }
}

function updateProgress() {
    var checkboxes = document.querySelectorAll('.status-checkbox');
    var total = checkboxes.length;
    var checked = 0;

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checked++;
        }
    });

    var progress = Math.round((checked / total) * 100);
    document.getElementById('progress').innerText = progress + '%';
}

document.querySelectorAll('.status-checkbox').forEach(function(checkbox) {
    checkbox.addEventListener('change', updateProgress);
});
