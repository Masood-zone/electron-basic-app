const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node (v${versions.node()}), and Electron (v${versions.electron()})`;

const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // Should log "pong"
};

func();
