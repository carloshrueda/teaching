nom = input("Nombre conductor: ")
pla = input("Placa vehículo: ")
valpas = int(input("Valor total del pasaje: "))
valenc = int(input("Valor total del encomienda: "))

ganpas = valpas * 0.25
ganenc = valenc * 0.15
gana = ganpas + ganenc

print("\n", "-" * 40)
print("Conductor: ", nom)
print("Placa: ", pla)
print(f"Valor total pasajes: ${valpas:,.0f}")
print(f"Valor Liquidacion pasajes: ${ganpas:,.0f}")
print(f"Valor total encomiendas: ${valenc:,.0f}")
print(f"Valor Liquidacion encomiendas: ${ganenc:,.0f}")
print(f"Valor total gana conductor: ${gana:,.0f}")
print("\n", "-" * 40)
