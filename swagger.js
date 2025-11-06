const getTodos = {
    tags: ['Todos'],
    description: "Obtiene todos los pendientes del sistema",
    operationId: 'getTodos',
    security: [
      {
        bearerAuth: []
      }
    ],
    responses: {
      "200": {
        description: "Lista de pendientes",
        "content": {
          "application/json": {
            schema: {
              type: "array",
              items: {
                id: {
                  type: 'integer',
                  description: 'ID del pendiente'
                },
                nombre: {
                  type: 'string',
                  description: 'Nombre del pendiente'
                },
                descripcion: {
                  type: 'string',
                  description: 'Descripción del pendiente'
                },
                fecha: {
                  type: 'string',
                  format: 'date',
                  description: 'Fecha del pendiente'
                }
              }
            }
          }
        }
      }
    }
  };
  
  const postTodos = {
    tags: ['Todos'],
    description: "Crear un nuevo pendiente",
    operationId: 'postTodos',
    consumes: [
      "application/json"
    ],
    produces: [
      "application/json"
    ],
    parameters: [
      {
        in: "body",
        name: "body",
        required: true,
        schema: {
          $ref: "#/components/schemas/todo"
        },
        description: "Datos del nuevo pendiente"
      }
    ],
    security: [
      {
        bearerAuth: []
      }
    ],
    responses: {
      "201": {
        description: "Pendiente creado exitosamente",
        "content": {
          "application/json": {
            schema: {
              id: {
                type: 'integer',
                description: 'ID del pendiente creado'
              },
              nombre: {
                type: 'string',
                description: 'Nombre del pendiente'
              },
              descripcion: {
                type: 'string',
                description: 'Descripción del pendiente'
              },
              fecha: {
                type: 'string',
                format: 'date',
                description: 'Fecha del pendiente'
              }
            }
          }
        }
      }
    }
  };
  
  const swaggerDocument = {
    definition: {
      swagger: "2.0",
      info: {
        title: "API de Pendientes - Express con Swagger",
        version: "1.0.0",
        description: "API REST para gestionar pendientes (tareas) con Express y PostgreSQL",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html"
        },
        contact: {
          name: "API Pendientes",
          url: "https://tec.mx",
          email: "info@tec.mx"
        }
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Servidor de desarrollo - API de Pendientes",
          variables: {
            env: {
              default: "app-dev",
              description: "Ambiente de Desarrollo"
            },
            port: {
              enum: [
                "8443",
                "3000",
                "443"
              ],
              default: "3000"
            },
            basePath: {
              default: "v1"
            }
          }
        }
      ],
      tags: [
        {
          name: 'Todos',
          description: 'Endpoints para gestionar pendientes'
        }
      ],
      paths: {
        "/todos": {
          "get": getTodos
        },
        "/todos/add": {
          "post": postTodos
        }
      },
      components: {
        schemas: {
          todo: {
            required: [
              "nombre",
              "fecha"
            ],
            properties: {
              nombre: {
                type: "string",
                description: "Nombre del pendiente",
                example: "Completar reporte mensual"
              },
              descripcion: {
                type: "string",
                description: "Descripción detallada del pendiente",
                example: "Elaborar y enviar el reporte de actividades del mes"
              },
              fecha: {
                type: "string",
                format: "date",
                description: "Fecha del pendiente (YYYY-MM-DD)",
                example: "2025-11-15"
              }
            }
          }
        }
      }
    },
    apis: ["./routes/todos.js"]
  };
  
  module.exports = { swaggerDocument };
  