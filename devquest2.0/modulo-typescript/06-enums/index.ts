// Enums é uma funcionalidade adicionada ao JavaScript pelo TypeScript
// na qual facilita o manuseio de grupos de constantes nomeadas.

// Por padrão um enum é baseado em números, começando no zero,
// e para cada opção é assinalado um número incrementado por um.
// Isso é útil quando o valor em si não importa.

// enum Colors {
//   Red,
//   Blue,
//   Green,
// }

// function showColor(color) {
//   console.log(color);
// }

// showColor(Colors.Red);

// enum UserResponse {
//   no = 0,
//   yes = 1,
// }

// function respondedEmail(recipient: string, userResponse: UserResponse): void {
//   // ... salva no banco se o usuario respondeu ou nao
// }
// respondedEmail("Caroline", UserResponse.yes);

// enum TradeType {
//     ACAO = 9281,
//     TESOURO_DIRETO = 3221,
//     TESOURO_SELIC = 6554,
// }

// saveTrade(TradeType.TESOURO_DIRETO)

// enum StatusCodes {
//     OK = 200,
//     BadRequest = 400,
// }

// StatusCodes.BadRequest

// enum Gender {
//   M = "Masculino",
//   F = "Feminino",
// }

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
}

const ok = StatusCodes.OK; //200
const indexOK = StatusCodes["OK"]; //200
const stringBadRequest = StatusCodes[400]; //BadRequest
