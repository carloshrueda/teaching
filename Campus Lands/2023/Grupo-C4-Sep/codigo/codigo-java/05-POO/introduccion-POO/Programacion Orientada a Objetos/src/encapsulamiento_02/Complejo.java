package encapsulamiento_02;

public class Complejo {
    private double real;
    private double imaginario;
    private String expresion;

    public Complejo() {
        real = 0.0;
        imaginario = 0.0;
        setExpresion();
    }

    public Complejo(double real, double imaginario) {
        this.real = real;
        this.imaginario = imaginario;
        setExpresion();
    }

    public Complejo(String expresion) {
        parserExpresion(expresion);
    }

    private void setExpresion() {
        String signo = imaginario >=0 ? "+" : "";

        if ((real != 0.0) && (imaginario != 0.0)) {
            expresion = real + signo + imaginario + "i";
        } else if (real ==0) {
            expresion = imaginario + "i";
        } else if (imaginario ==0) {
            expresion = real + "";
        } else {
            expresion = "0";
        }
    }

    public String getExpresion() {
        return expresion;
    }

    public double getReal() {
        return real;
    }

    public void setReal(double real) {
        this.real = real;
    }

    public double getImaginario() {
        return imaginario;
    }

    public void setImaginario(double imaginario) {
        this.imaginario = imaginario;
    }

    private void parserExpresion(String expresion) {
        //-2.5-2.8i
        expresion = expresion.replaceAll(" ", "");

        double real = 0.0;
        double imaginario = 0.0;

        // Encontrar el índice del símbolo '+' o '-'
        int posIndex = expresion.indexOf('+', 1);  // Ignorar el primer carácter en caso de que sea '+'
        int negIndex = expresion.indexOf('-', 1);

        // Determinar el índice correcto del separador entre parte real e imaginaria
        int separatorIndex = (posIndex > 0) ? posIndex : negIndex;

        if (separatorIndex > 0) {
            // Parsear la parte real
            this.real = Double.parseDouble(expresion.substring(0, separatorIndex));

            // Parsear la parte imaginaria sin la "i" al final
            String imaginaryStr = expresion.substring(separatorIndex, expresion.length() - 1);
            this.imaginario = Double.parseDouble(imaginaryStr);
        } else {
            // En caso de que no haya parte imaginaria o solo imaginaria
            if (expresion.endsWith("i")) {
                this.real = 0.0;
                this.imaginario = Double.parseDouble(expresion.substring(0, expresion.length() - 1));
            } else {
                this.real = Double.parseDouble(expresion);
                this.imaginario = 0.0;
            }
        }

        setExpresion();
    }

    public String imprimir() {
        return expresion;
    }

    public Complejo sumar(Complejo c) {
        return new Complejo(this.real + c.getReal(), this.imaginario + c.getImaginario());
    }

    public Complejo restar(Complejo c) {
        return new Complejo(this.real - c.getReal(), this.imaginario - c.getImaginario());
    }

}

class PruebaComplejo {
    public static void main(String[] args) {
        Complejo comp = new Complejo(-2.8, 2.5);
        System.out.println(comp.imprimir());

        Complejo expcomp = new Complejo("-2-3i");
        System.out.println(expcomp.imprimir());

        //sumarlos
        System.out.println("-".repeat(10));
        System.out.println(comp.sumar(expcomp).imprimir());

        //restarlos
        System.out.println("-".repeat(10));
        System.out.println(comp.restar(expcomp).imprimir());
    }
}
