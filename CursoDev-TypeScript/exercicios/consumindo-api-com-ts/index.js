/* Neste exercício, você vai praticar como **consumir dados de uma API externa** utilizando **fetch** com **async/await**, enquanto garante a **tipagem correta** do retorno em **TypeScript**. O desafio consiste em definir um tipo que represente os produtos da API e exibir no console algumas informações relevantes.

`AVISO`: tente fazer sozinho primeiro, caso sinta necessidade pode consultar a resolução do exercício.

### **Objetivos do exercício**

- Criar um `type` que represente os produtos retornados pela API FakeStore.
- Definir todas as propriedades necessárias, incluindo o objeto interno `rating`.
- Implementar uma função assíncrona para buscar os dados da API.
- Tipar o retorno da função como `Promise<Produto[]>`.
- Exibir no console o título e o preço de cada produto.
- Tratar erros em caso de falha na requisição.

### **Sugestões de implementação**

- Use `type Produto = { ... }` para definir a estrutura dos dados.
- Utilize `fetch` em conjunto com `async/await` para buscar os produtos.
- Após o `await response.json()`, atribua o resultado a uma variável tipada como `Produto[]`.
- Use `forEach` para percorrer o array e imprimir as informações desejadas no console.
- Adicione um `catch` para capturar e exibir possíveis erros.

**Objetivo final:** reforçar o entendimento sobre **consumo de APIs** com **TypeScript**, aplicando tipagem estática para garantir maior segurança e clareza no código. */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function getProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://fakestoreapi.com/products")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function renderProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var product, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getProducts()];
                case 1:
                    product = _a.sent();
                    product.forEach(function (product) {
                        console.log("Titulo; ".concat(product.title));
                        console.log("Pre\u00E7o: ".concat(product.price));
                        console.log('-------------------------');
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Erro ao carregar produtos', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
renderProducts();
