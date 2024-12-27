// Junior developer implementation
const API_KEY = "532ce845b55f4865c18adc1a"; // Get from exchangerate-api.com
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

// Elementos del DOM
const cantOrigen = document.getElementById('cant-orig');
const cantDestino = document.getElementById('cant-dest');
const divOrigen = document.getElementById('div-orig');
const divDestino = document.getElementById('div-dest');
const btnConvertir = document.getElementById('convertir');

// Cargar monedas disponibles
async function cargarMonedas() {
    try {
        const response = await fetch(`${BASE_URL}/${API_KEY}/codes`);
        const data = await response.json();
        
        data.supported_codes.forEach(([code]) => {
            divOrigen.innerHTML += `<option value="${code}">${code}</option>`;
            divDestino.innerHTML += `<option value="${code}">${code}</option>`;
        });

        // Establecer moneda por defecto
        divOrigen.value = 'COP'; // Pesos Colombianos
        divDestino.value = 'USD'; // Dólares Estadounidenses
    } catch (error) {
        alert('Error al cargar las monedas');
    }
}

// Convertir monedas
async function convertirMonedas() {
    if (divOrigen.value === 'none' || divDestino.value === 'none') {
        alert('Por favor seleccione ambas monedas');
        return;
    }

    try {
        const cantidad = cantOrigen.value || cantDestino.value;
        const origen = divOrigen.value;
        const destino = divDestino.value;

        const response = await fetch(`${BASE_URL}/${API_KEY}/pair/${origen}/${destino}/${cantidad}`);
        const data = await response.json();

        if (cantOrigen.value) {
            cantDestino.value = data.conversion_result.toFixed(2);
        } else {
            cantOrigen.value = (cantidad / data.conversion_rate).toFixed(2);
        }
    } catch (error) {
        alert('Error en la conversión');
    }
}

// Event Listeners
btnConvertir.addEventListener('click', convertirMonedas);

// Cargar monedas al iniciar
cargarMonedas();

/* 
// Senior developer implementation would include:
1. Error handling with specific error messages
2. Input validation and sanitization
3. Rate limiting
4. Caching exchange rates
5. Debouncing user input
6. Loading states
7. Unit tests
8. TypeScript implementation
9. State management
10. Service layer abstraction

Example of a more robust implementation:

class CurrencyConverter {
    private static instance: CurrencyConverter;
    private cache: Map<string, {rate: number, timestamp: number}>;
    private readonly CACHE_DURATION = 1000 * 60 * 5; // 5 minutes

    private constructor() {
        this.cache = new Map();
    }

    public static getInstance(): CurrencyConverter {
        if (!CurrencyConverter.instance) {
            CurrencyConverter.instance = new CurrencyConverter();
        }
        return CurrencyConverter.instance;
    }

    async getRate(from: string, to: string): Promise<number> {
        const cacheKey = `${from}-${to}`;
        const cached = this.cache.get(cacheKey);

        if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
            return cached.rate;
        }

        const rate = await this.fetchRate(from, to);
        this.cache.set(cacheKey, {
            rate,
            timestamp: Date.now()
        });

        return rate;
    }
}
*/