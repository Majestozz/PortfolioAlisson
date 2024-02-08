async function listProjects() {
    const conection = await fetch("http://localhost:3000/projetos")
    const conectionConverted = await conection.json();
    return conectionConverted;
}

export const conectApi = {
    listProjects
}