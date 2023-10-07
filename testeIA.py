import netCDF4 as nc

# Abra o arquivo .nc
arquivo_nc = nc.Dataset('ETOPO1_Bed_g_gmt4.nc', 'r')  # Substitua 'seuarquivo.nc' pelo nome do seu arquivo .nc

variaveis = arquivo_nc.variables
print(variaveis)