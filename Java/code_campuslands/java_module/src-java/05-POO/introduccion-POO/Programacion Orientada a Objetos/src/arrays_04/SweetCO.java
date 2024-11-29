package arrays_04;

public class SweetCO {
    public static void main(String[] args) {
        int[][] ventas = {
                {100,88,92,94,85,110,118},
                {30,42,31,32,38,40,37},
                {23,35,39,45,55,60,61},
                {45,50,56,65,47,57,68},
                {18,25,33,21,22,28,32}};
        int[] precio = {1500,5000,6500,2500,22500};


        System.out.println("El producto que genera más ingesos es: " +
                prodMasIngresos(ventas, precio));

    }

    private static String prodMasIngresos(int[][] ventas, int[] precio) {
        int[] vtasprod = new int[precio.length];
        // Arrays.fill(vtasprod, 0);

        int vtasmax = -1;
        int prodmasvende = 0;

        for(int i=0; i<ventas.length; i++) {
            for(int j=0; j<ventas[i].length; j++) {
                vtasprod[i] += ventas[i][j] * precio[i];
            }

            if (vtasprod[i] > vtasmax) {
                vtasmax = vtasprod[i];
                prodmasvende = i + 1;
            }
        }

        return prodmasvende + "";
    }
}
