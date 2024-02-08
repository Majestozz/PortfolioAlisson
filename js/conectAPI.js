async function listProjects() {
    const conection = await fetch("https://json-portfolio-one.vercel.app/projetos")
    const conectionConverted = await conection.json();
    return conectionConverted;
}

export const conectApi = {
    listProjects
}