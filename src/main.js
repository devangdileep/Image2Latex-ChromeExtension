document.getElementById("convertbutton").addEventListener("click", async () => {
  const imageFile = document.getElementById("uploaded-image").files[0];
  const output = document.getElementById("latexoutput");

  if (!imageFile) {
    output.value = "Please upload an image first.";
    return;
  }
  const formData = new FormData();
  formData.append("image", imageFile);
  try {
    const res = await fetch("http://127.0.0.1:5000/api/convert", {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    output.value = data.latex || "No LaTeX code received.";
  } catch (error) {
    output.value = "Error connecting to server.";
    console.error(error);
  }
});
