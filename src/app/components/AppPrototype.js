// // src/app/components/AppPrototype.js
// 'use client';  // Importante: necesitamos esto para usar hooks y componentes del cliente
//
// import React from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
// import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import {
//   Leaf,
//   CloudRain,
//   Sprout,
//   Activity,
//   Settings,
//   Database,
//   Droplet,
//   Sun,
//   Wind,
//   ThermometerSun
// } from 'lucide-react';
// import {mockSensorData} from "@/app/components/mockData";
//
//
// const AnalisisTerreno = () => (
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//     <Card className="col-span-1">
//       <CardHeader>
//         <CardTitle>Parámetros del Suelo</CardTitle>
//         <CardDescription>Mediciones actuales</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <div className="p-4 bg-blue-50 rounded-lg">
//               <div className="flex items-center gap-2">
//                 <Droplet className="w-5 h-5 text-blue-500" />
//                 <span>Humedad</span>
//               </div>
//               <p className="text-2xl font-bold">65%</p>
//             </div>
//             <div className="p-4 bg-yellow-50 rounded-lg">
//               <div className="flex items-center gap-2">
//                 <ThermometerSun className="w-5 h-5 text-yellow-500" />
//                 <span>pH</span>
//               </div>
//               <p className="text-2xl font-bold">6.5</p>
//             </div>
//           </div>
//           <ResponsiveContainer width="100%" height={200}>
//             <LineChart data={mockSensorData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="time" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="value" stroke="#2563eb" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </CardContent>
//     </Card>
//
//     <Card className="col-span-1">
//       <CardHeader>
//         <CardTitle>Análisis de Nutrientes</CardTitle>
//         <CardDescription>Niveles actuales</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           <div className="flex justify-between items-center">
//             <span>Nitrógeno (N)</span>
//             <div className="w-48 bg-gray-200 rounded-full h-2">
//               <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
//             </div>
//             <span>70%</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span>Fósforo (P)</span>
//             <div className="w-48 bg-gray-200 rounded-full h-2">
//               <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
//             </div>
//             <span>45%</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span>Potasio (K)</span>
//             <div className="w-48 bg-gray-200 rounded-full h-2">
//               <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
//             </div>
//             <span>85%</span>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   </div>
// );
//
// const PreparacionSuelo = () => (
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//     <Card className="col-span-1">
//       <CardHeader>
//         <CardTitle>Plan de Preparación</CardTitle>
//         <CardDescription>Tareas programadas</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           <div className="flex items-center p-3 bg-green-50 rounded-lg">
//             <div className="flex-1">
//               <h4 className="font-medium">Arado del terreno</h4>
//               <p className="text-sm text-gray-500">Sector A1 - 2 hectáreas</p>
//             </div>
//             <span className="text-green-600">Completado</span>
//           </div>
//           <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
//             <div className="flex-1">
//               <h4 className="font-medium">Nivelación del suelo</h4>
//               <p className="text-sm text-gray-500">Sector B2 - 1.5 hectáreas</p>
//             </div>
//             <span className="text-yellow-600">En progreso</span>
//           </div>
//           <div className="flex items-center p-3 bg-gray-50 rounded-lg">
//             <div className="flex-1">
//               <h4 className="font-medium">Aplicación de compost</h4>
//               <p className="text-sm text-gray-500">Sector C3 - 3 hectáreas</p>
//             </div>
//             <span className="text-gray-600">Pendiente</span>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//
//     <Card className="col-span-1">
//       <CardHeader>
//         <CardTitle>Recomendaciones</CardTitle>
//         <CardDescription>Basadas en análisis del suelo</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           <div className="p-4 border rounded-lg">
//             <h4 className="font-medium text-green-600">Fertilización recomendada</h4>
//             <p className="mt-2 text-sm">Aplicar 150 kg/ha de fertilizante NPK (15-15-15)</p>
//           </div>
//           <div className="p-4 border rounded-lg">
//             <h4 className="font-medium text-blue-600">Control de pH</h4>
//             <p className="mt-2 text-sm">Agregar 2 ton/ha de cal dolomita para ajustar pH</p>
//           </div>
//           <div className="p-4 border rounded-lg">
//             <h4 className="font-medium text-purple-600">Materia orgánica</h4>
//             <p className="mt-2 text-sm">Incorporar 5 ton/ha de compost maduro</p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   </div>
// );
//
// const SiembraCultivo = () => (
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//     <Card className="col-span-1">
//       <CardHeader>
//         <CardTitle>Planificación de Siembra</CardTitle>
//         <CardDescription>Estado actual y programación</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           <div className="p-4 bg-green-50 rounded-lg">
//             <h4 className="font-medium">Cultivo Principal</h4>
//             <div className="mt-2 space-y-2">
//               <div className="flex justify-between">
//                 <span>Tipo de cultivo</span>
//                 <span className="font-medium">Maíz híbrido</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Densidad de siembra</span>
//                 <span className="font-medium">75,000 plantas/ha</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Fecha programada</span>
//                 <span className="font-medium">15 de Mayo</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//
//     <Card className="col-span-1">
//       <CardHeader>
//         <CardTitle>Monitoreo de Condiciones</CardTitle>
//         <CardDescription>Factores ambientales</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="p-4 bg-blue-50 rounded-lg">
//             <div className="flex items-center gap-2">
//               <CloudRain className="w-5 h-5 text-blue-500" />
//               <span>Humedad</span>
//             </div>
//             <p className="text-2xl font-bold">75%</p>
//           </div>
//           <div className="p-4 bg-orange-50 rounded-lg">
//             <div className="flex items-center gap-2">
//               <Sun className="w-5 h-5 text-orange-500" />
//               <span>Temperatura</span>
//             </div>
//             <p className="text-2xl font-bold">24°C</p>
//           </div>
//           <div className="p-4 bg-gray-50 rounded-lg">
//             <div className="flex items-center gap-2">
//               <Wind className="w-5 h-5 text-gray-500" />
//               <span>Viento</span>
//             </div>
//             <p className="text-2xl font-bold">12 km/h</p>
//           </div>
//           <div className="p-4 bg-yellow-50 rounded-lg">
//             <div className="flex items-center gap-2">
//               <Sun className="w-5 h-5 text-yellow-500" />
//               <span>UV Index</span>
//             </div>
//             <p className="text-2xl font-bold">6.5</p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   </div>
// );
//
// const Dashboard = () => (
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//     <Card className="col-span-1">
//       <CardHeader>
//         <CardTitle>Estado del Cultivo</CardTitle>
//         <CardDescription>Resumen general</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-2">
//           <div className="flex justify-between">
//             <span>Humedad del suelo</span>
//             <span className="font-medium">65%</span>
//           </div>
//           <div className="flex justify-between">
//             <span>pH del suelo</span>
//             <span className="font-medium">6.5</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Temperatura</span>
//             <span className="font-medium">24°C</span>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//
//     <Card className="col-span-1">
//       <CardHeader>
//         <CardTitle>Alertas Activas</CardTitle>
//         <CardDescription>Requieren atención</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-2">
//           <div className="p-2 bg-red-100 rounded-lg">
//             Nivel bajo de nitrógeno en sector A3
//           </div>
//           <div className="p-2 bg-yellow-100 rounded-lg">
//             Riego programado en 2 horas
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//
//     <Card className="col-span-1">
//       <CardHeader>
//         <CardTitle>Próximas Tareas</CardTitle>
//         <CardDescription>Calendario de actividades</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-2">
//           <div className="flex justify-between items-center">
//             <span>Fertilización</span>
//             <span className="text-sm text-gray-500">Mañana</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span>Control de plagas</span>
//             <span className="text-sm text-gray-500">En 3 días</span>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   </div>
// );
//
// const AppPrototype = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="max-w-7xl mx-auto space-y-4">
//         <div className="flex items-center justify-between">
//           <h1 className="text-2xl font-bold text-gray-900">Agricultura de Precisión</h1>
//           <div className="flex items-center space-x-4">
//             <span className="text-sm text-gray-500">Valle del Cauca</span>
//           </div>
//         </div>
//
//         <Tabs defaultValue="dashboard" className="w-full">
//           <TabsList className="w-full justify-start overflow-x-auto">
//             <TabsTrigger value="dashboard" className="flex items-center gap-2">
//               <Activity className="w-5 h-5" />
//               Dashboard
//             </TabsTrigger>
//             <TabsTrigger value="analisis" className="flex items-center gap-2">
//               <Database className="w-5 h-5" />
//               Análisis
//             </TabsTrigger>
//             <TabsTrigger value="preparacion" className="flex items-center gap-2">
//               <Settings className="w-5 h-5" />
//               Preparación
//             </TabsTrigger>
//             <TabsTrigger value="siembra" className="flex items-center gap-2">
//               <Sprout className="w-5 h-5" />
//               Siembra
//             </TabsTrigger>
//             <TabsTrigger value="nutricion" className="flex items-center gap-2">
//               <Leaf className="w-5 h-5" />
//               Nutrición
//             </TabsTrigger>
//             <TabsTrigger value="riego" className="flex items-center gap-2">
//               <CloudRain className="w-5 h-5" />
//               Riego
//             </TabsTrigger>
//           </TabsList>
//
//           <div className="mt-4">
//             <TabsContent value="dashboard">
//               <Dashboard />
//             </TabsContent>
//
//             <TabsContent value="analisis">
//               <AnalisisTerreno />
//             </TabsContent>
//
//             <TabsContent value="preparacion">
//               <PreparacionSuelo />
//             </TabsContent>
//
//             <TabsContent value="siembra">
//               <SiembraCultivo />
//             </TabsContent>
//
//             <TabsContent value="nutricion">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Estado Nutricional</CardTitle>
//                     <CardDescription>Niveles actuales de nutrientes</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       <div className="p-4 bg-green-50 rounded-lg">
//                         <h4 className="font-medium">Macronutrientes</h4>
//                         <div className="mt-2 space-y-2">
//                           <div className="flex justify-between items-center">
//                             <span>Nitrógeno (N)</span>
//                             <div className="w-32 bg-gray-200 rounded-full h-2">
//                               <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
//                             </div>
//                             <span>75%</span>
//                           </div>
//                           <div className="flex justify-between items-center">
//                             <span>Fósforo (P)</span>
//                             <div className="w-32 bg-gray-200 rounded-full h-2">
//                               <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
//                             </div>
//                             <span>60%</span>
//                           </div>
//                           <div className="flex justify-between items-center">
//                             <span>Potasio (K)</span>
//                             <div className="w-32 bg-gray-200 rounded-full h-2">
//                               <div className="bg-red-500 h-2 rounded-full" style={{ width: '45%' }}></div>
//                             </div>
//                             <span>45%</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Plan de Fertilización</CardTitle>
//                     <CardDescription>Recomendaciones basadas en análisis</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       <div className="p-4 border rounded-lg">
//                         <h4 className="font-medium text-red-600">Acción Requerida</h4>
//                         <p className="mt-2 text-sm">Aplicar fertilizante NPK (20-10-10) en Sector A3</p>
//                         <p className="text-sm text-gray-500">Prioridad: Alta</p>
//                       </div>
//                       <div className="p-4 border rounded-lg">
//                         <h4 className="font-medium text-yellow-600">Próxima Aplicación</h4>
//                         <p className="mt-2 text-sm">Fertilizante foliar en Sector B2</p>
//                         <p className="text-sm text-gray-500">Programado: 3 días</p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </TabsContent>
//
//             <TabsContent value="riego">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Control de Riego</CardTitle>
//                     <CardDescription>Estado actual y programación</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       <div className="p-4 bg-blue-50 rounded-lg">
//                         <h4 className="font-medium">Estado del Sistema</h4>
//                         <div className="mt-2 space-y-2">
//                           <div className="flex justify-between">
//                             <span>Sector activo</span>
//                             <span className="font-medium">A2 (En riego)</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span>Tiempo restante</span>
//                             <span className="font-medium">45 minutos</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span>Caudal actual</span>
//                             <span className="font-medium">2.5 L/s</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="p-4 border rounded-lg">
//                         <h4 className="font-medium">Próximos Riegos</h4>
//                         <div className="mt-2 space-y-2">
//                           <div className="flex justify-between">
//                             <span>Sector B1</span>
//                             <span>2 horas</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span>Sector C3</span>
//                             <span>5 horas</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Sensores de Humedad</CardTitle>
//                     <CardDescription>Lecturas en tiempo real</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="h-64">
//                       <ResponsiveContainer width="100%" height="100%">
//                         <LineChart data={mockSensorData}>
//                           <CartesianGrid strokeDasharray="3 3" />
//                           <XAxis dataKey="time" />
//                           <YAxis />
//                           <Tooltip />
//                           <Legend />
//                           <Line type="monotone" dataKey="value" stroke="#2563eb" name="Humedad %" />
//                         </LineChart>
//                       </ResponsiveContainer>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </TabsContent>
//           </div>
//         </Tabs>
//       </div>
//     </div>
//   );
// };
//
// export default AppPrototype;

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import {
  Activity,
  Database,
  Settings,
  Sprout,
  Leaf,
  CloudRain,
  Droplet,
  ThermometerSun,
  Wind,
  AlertTriangle,
  Calendar,
  ArrowUpCircle
} from 'lucide-react';

import { mockSensorData } from './mockData';

const AnalisisTerreno = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Parámetros del Suelo</CardTitle>
        <CardDescription>Mediciones actuales</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Droplet className="w-5 h-5 text-blue-500" />
                <span>Humedad</span>
              </div>
              <p className="text-2xl font-bold">65%</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center gap-2">
                <ThermometerSun className="w-5 h-5 text-yellow-500" />
                <span>pH</span>
              </div>
              <p className="text-2xl font-bold">6.5</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={mockSensorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#2563eb" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>

    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Análisis de Nutrientes</CardTitle>
        <CardDescription>Niveles actuales</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Nitrógeno (N)</span>
            <div className="w-48 bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <span>70%</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Fósforo (P)</span>
            <div className="w-48 bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <span>45%</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Potasio (K)</span>
            <div className="w-48 bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <span>85%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const PreparacionSuelo = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Plan de Preparación</CardTitle>
        <CardDescription>Tareas programadas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <div className="flex-1">
              <h4 className="font-medium">Arado del terreno</h4>
              <p className="text-sm text-gray-500">Sector A1 - 2 hectáreas</p>
            </div>
            <span className="text-green-600">Completado</span>
          </div>
          <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
            <div className="flex-1">
              <h4 className="font-medium">Nivelación del suelo</h4>
              <p className="text-sm text-gray-500">Sector B2 - 1.5 hectáreas</p>
            </div>
            <span className="text-yellow-600">En progreso</span>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <h4 className="font-medium">Aplicación de compost</h4>
              <p className="text-sm text-gray-500">Sector C3 - 3 hectáreas</p>
            </div>
            <span className="text-gray-600">Pendiente</span>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Recomendaciones</CardTitle>
        <CardDescription>Basadas en análisis del suelo</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium text-green-600">Fertilización recomendada</h4>
            <p className="mt-2 text-sm">Aplicar 150 kg/ha de fertilizante NPK (15-15-15)</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium text-blue-600">Control de pH</h4>
            <p className="mt-2 text-sm">Agregar 2 ton/ha de cal dolomita para ajustar pH</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium text-purple-600">Materia orgánica</h4>
            <p className="mt-2 text-sm">Incorporar 5 ton/ha de compost maduro</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const SiembraCultivo = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Planificación de Siembra</CardTitle>
        <CardDescription>Estado actual y programación</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium">Cultivo Principal</h4>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between">
                <span>Tipo de cultivo</span>
                <span className="font-medium">Maíz híbrido</span>
              </div>
              <div className="flex justify-between">
                <span>Densidad de siembra</span>
                <span className="font-medium">75,000 plantas/ha</span>
              </div>
              <div className="flex justify-between">
                <span>Fecha programada</span>
                <span className="font-medium">15 de Mayo</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Monitoreo de Condiciones</CardTitle>
        <CardDescription>Factores ambientales</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2">
              <CloudRain className="w-5 h-5 text-blue-500" />
              <span>Humedad</span>
            </div>
            <p className="text-2xl font-bold">75%</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5 text-orange-500" />
              <span>Temperatura</span>
            </div>
            <p className="text-2xl font-bold">24°C</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Wind className="w-5 h-5 text-gray-500" />
              <span>Viento</span>
            </div>
            <p className="text-2xl font-bold">12 km/h</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5 text-yellow-500" />
              <span>UV Index</span>
            </div>
            <p className="text-2xl font-bold">6.5</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const DashboardCard = ({ title, description, children, className = "" }) => (
    <Card className={`shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      <CardHeader>
        <CardTitle className="text-emerald-800">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
);

const StatusIndicator = ({ icon: Icon, label, value, color = "text-emerald-600" }) => (
    <div className="flex items-center justify-between p-2 border rounded-lg hover:bg-emerald-50 transition-colors">
      <div className="flex items-center gap-2">
        <Icon className={`w-5 h-5 ${color}`} />
        <span className="text-gray-600">{label}</span>
      </div>
      <span className="font-semibold">{value}</span>
    </div>
);

const AlertItem = ({ message, type = "warning" }) => {
  const colors = {
    error: "bg-red-100 border-red-200 text-red-700",
    warning: "bg-yellow-100 border-yellow-200 text-yellow-700",
    info: "bg-blue-100 border-blue-200 text-blue-700"
  };

  return (
      <div className={`p-3 rounded-lg border ${colors[type]} flex items-center gap-2`}>
        <AlertTriangle className="w-5 h-5" />
        <span>{message}</span>
      </div>
  );
};

const TaskItem = ({ task, date, status = "pending" }) => (
    <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4 text-emerald-600" />
        <span>{task}</span>
      </div>
      <span className="text-sm text-gray-500">{date}</span>
    </div>
);

const TabButton = ({ icon: Icon, children, ...props }) => (
    <TabsTrigger {...props} className="flex items-center gap-2 px-4 py-2 hover:bg-emerald-50 data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 transition-colors">
      <Icon className="w-5 h-5" />
      {children}
    </TabsTrigger>
);

const Dashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <DashboardCard
          title="Estado del Cultivo"
          description="Resumen general"
          className="bg-gradient-to-br from-white to-emerald-50"
      >
        <div className="space-y-3">
          <StatusIndicator
              icon={Droplet}
              label="Humedad del suelo"
              value="65%"
          />
          <StatusIndicator
              icon={ThermometerSun}
              label="pH del suelo"
              value="6.5"
          />
          <StatusIndicator
              icon={Wind}
              label="Temperatura"
              value="24°C"
          />
        </div>
      </DashboardCard>

      <DashboardCard
          title="Alertas Activas"
          description="Requieren atención"
      >
        <div className="space-y-3">
          <AlertItem
              message="Nivel bajo de nitrógeno en sector A3"
              type="error"
          />
          <AlertItem
              message="Riego programado en 2 horas"
              type="warning"
          />
        </div>
      </DashboardCard>

      <DashboardCard
          title="Próximas Tareas"
          description="Calendario de actividades"
      >
        <div className="space-y-2">
          <TaskItem
              task="Fertilización"
              date="Mañana"
          />
          <TaskItem
              task="Control de plagas"
              date="En 3 días"
          />
        </div>
      </DashboardCard>
    </div>
);

// Resto de los componentes para otras pestañas...

const AppPrototype = () => {
  return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-emerald-50/30 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between pb-6 border-b">
            <div>
              <h1 className="text-3xl font-bold text-emerald-800">Agricultura de Precisión</h1>
              <p className="text-emerald-600">Sistema de Monitoreo y Control</p>
            </div>
            <div className="flex items-center gap-2 text-emerald-700">
              <ArrowUpCircle className="w-5 h-5" />
              <span>Valle del Cauca</span>
            </div>
          </div>

          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="w-full justify-start bg-white shadow-sm mb-6 p-1 rounded-lg">
              <TabButton value="dashboard" icon={Activity}>Dashboard</TabButton>
              <TabButton value="analisis" icon={Database}>Análisis</TabButton>
              <TabButton value="preparacion" icon={Settings}>Preparación</TabButton>
              <TabButton value="siembra" icon={Sprout}>Siembra</TabButton>
              <TabButton value="nutricion" icon={Leaf}>Nutrición</TabButton>
              <TabButton value="riego" icon={CloudRain}>Riego</TabButton>
            </TabsList>

            <TabsContent value="dashboard">
              <Dashboard />
            </TabsContent>

            {/* Aquí irían los TabsContent para las otras pestañas */}
          </Tabs>
        </div>
      </div>
  );
};

export default AppPrototype;