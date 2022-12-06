valor = int(input('Entre com um número para saber a tabuada: '))  
i = 1
#print('*' * 18)  
print('Tabuada de {}'.format(valor))  
#print('*' * 18)  
while(i <= 10):  
  print(f'{valor} x {i} = {valor * i}')
  i = i + 1