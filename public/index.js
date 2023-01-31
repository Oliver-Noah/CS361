var modalBackdrop = document.getElementById("modal-backdrop");
var createProjectModal = document.getElementById("create-project-modal");
var createProjectButton = document.getElementById("create-project-button");

createProjectButton.onclick = function removeHidden() {
    modalBackdrop.classList.remove('hidden')
    createProjectModal.classList.remove('hidden')
}

var modalCancelButton = document.getElementsByClassName("modal-cancel-button")
var modalCreateButton = document.getElementsByClassName("modal-accept-button")
var modalCloseButton = document.getElementsByClassName("modal-close-button")
var projectInput1 = document.getElementById('project-name-input')
var projectInput2 = document.getElementById('project-location-input')
var projectInput3 = document.getElementById('project-date-input')

modalCancelButton[0].addEventListener('click', function handleCancelClick() {
    modalBackdrop.classList.add('hidden')
    createProjectModal.classList.add('hidden')
    projectInput1.value = ''
    projectInput2.value = ''
    projectInput3.value = ''
})

modalCloseButton[0].addEventListener('click', function handleCloseClick() {
    modalBackdrop.classList.add('hidden')
    createProjectModal.classList.add('hidden')
    projectInput1.value = ''
    projectInput2.value = ''
    projectInput3.value = ''
})