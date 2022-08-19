let pipelineName = document.getElementById("pipeline-name");
let projectName = document.getElementById("project-name");
let bucketName = document.getElementById("bucket-name");
let fileLocation = document.getElementById("file-location");

pipelineName.addEventListener("blur", () => {
  let regex = /^[a-z]*[^!@#$%^&()_+]/;
  let s = pipelineName.value;
  console.log(s.length);
  if (regex.test(s)) {
  } else {
    alert("Do Not Use Special Characters and Minimum length should be 5");
  }
});

projectName.addEventListener("blur", () => {
  console.log("blurred");
  let regex = /^[a-z]*[^!@#$%^&()_+]/;
  let s = projectName.value;
  if (regex.test(s)) {
  } else {
    alert("Do Not Use Special Characters and Minimum length should be 5");
  }
});

bucketName.addEventListener("blur", () => {
  console.log("blurred");
  let regex = /^[a-z]*[^!@#$%^&()_+]/;
  let s = bucketName.value;
  if (regex.test(s)) {
  } else {
    alert("Do Not Use Special Characters and Minimum length should be 5");
  }
});

fileLocation.addEventListener("blur", () => {
  let regex = /^[a-z]*[^!@#$%^&()_+]/;
  let s = fileLocation.value;
  if (regex.test(s)) {
  } else {
    alert("Do Not Use Special Characters and Minimum length should be 5");
  }
});
