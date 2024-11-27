package Enumeraciones_09;

class Pedido {
    private final int id;
    private EstadoPedido estado;

    public Pedido(int id) {
        this.id = id;
        this.estado = EstadoPedido.CREADO;
    }

    public void avanzarEstado() {
        this.estado = estado.siguienteEstado();
    }

    public String obtenerMensajeEstado() {
        return estado.obtenerMensaje();
    }

    public EstadoPedido getEstado() {
        return estado;
    }

    public int getId() {
        return id;
    }

    // Enumeración con lógica de estado
    public enum EstadoPedido {
        CREADO {
            @Override
            public EstadoPedido siguienteEstado() {
                return PAGADO;
            }

            @Override
            public String obtenerMensaje() {
                return "El pedido ha sido creado.";
            }
        },
        PAGADO {
            @Override
            public EstadoPedido siguienteEstado() {
                return ENVIADO;
            }

            @Override
            public String obtenerMensaje() {
                return "El pedido ha sido pagado.";
            }
        },
        ENVIADO {
            @Override
            public EstadoPedido siguienteEstado() {
                return null; // No hay más estados.
            }

            @Override
            public String obtenerMensaje() {
                return "El pedido ha sido enviado.";
            }
        },
        CANCELADO {
            @Override
            public EstadoPedido siguienteEstado() {
                return null; // No puede avanzar.
            }

            @Override
            public String obtenerMensaje() {
                return "El pedido ha sido cancelado.";
            }
        };

        // Métodos abstractos para comportamiento específico
        public abstract EstadoPedido siguienteEstado();
        public abstract String obtenerMensaje();
    }
}

public class SistemaPedidosEstados {
    public static void main(String[] args) {
        Pedido pedido = new Pedido(1);

        System.out.println("Pedido ID: " + pedido.getId());
        System.out.println("Estado inicial: " + pedido.getEstado());
        System.out.println("Mensaje: " + pedido.obtenerMensajeEstado());

        pedido.avanzarEstado();
        System.out.println("\nEstado actual: " + pedido.getEstado());
        System.out.println("Mensaje: " + pedido.obtenerMensajeEstado());

        pedido.avanzarEstado();
        System.out.println("\nEstado actual: " + pedido.getEstado());
        System.out.println("Mensaje: " + pedido.obtenerMensajeEstado());
    }
}
