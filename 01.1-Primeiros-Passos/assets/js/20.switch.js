let profession = "Policial";

console.log("Profissão : "+profession);

switch (profession) {
    case "Policial":
        console.log("Sua camisa sera azul");
        break;
    case "Fiscal":
        console.log("Sua camisa sera verde");
        break;
    case "Bombeiro":
        console.log("Sua camisa sera vermelha");
        break;

    default:
        console.log("Sua camisa sera preta");
        break;
}