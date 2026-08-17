/* Dados simulados de locatário (Exibição/Listagem). 10 casos: cada status com PF e PJ. */
window.LOCATARIOS = {
  "1": {
    "nome": "Marina Alves Comércio Ltda",
    "tipo": "PJ",
    "status": "Ativo",
    "email": "marina@alvescom.com.br",
    "docNum": "12.345.678/0001-90",
    "boxes": "A-102, A-103",
    "unidade": "Vila Leopoldina",
    "seguro": "MAPFRE",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "CNPJ",
            "value": "12.345.678/0001-90"
          },
          {
            "label": "Razão social",
            "value": "Marina Alves Comércio Ltda"
          },
          {
            "label": "Nome fantasia",
            "value": "Alves Comércio"
          },
          {
            "label": "Data de fundação",
            "value": "12/03/2015"
          },
          {
            "label": "Natureza jurídica",
            "value": "Sociedade Empresária Limitada"
          },
          {
            "label": "Porte",
            "value": "EPP"
          },
          {
            "label": "Inscrição municipal",
            "value": "1.234.567-8"
          },
          {
            "label": "Inscrição estadual",
            "value": "110.042.490.114"
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": true
          }
        ]
      },
      {
        "title": "Sócios e representantes",
        "quadro": [
          {
            "nome": "Marina Alves",
            "cpf": "045.678.912-33",
            "tipo": "Pessoa Física",
            "qualificacao": "Administrador",
            "dataInclusao": "12/03/2015",
            "pais": "105 · BRASIL"
          },
          {
            "nome": "Alves Participações Ltda",
            "cpf": "11.222.333/0001-44",
            "tipo": "Pessoa Jurídica",
            "qualificacao": "Sócio",
            "dataInclusao": "12/03/2015",
            "pais": "105 · BRASIL"
          }
        ],
        "repLegal": [
          {
            "nome": "Marina Alves",
            "cpf": "045.678.912-33",
            "qualificacao": "Administrador"
          }
        ]
      },
      {
        "title": "Representantes e procuradores",
        "reps": [
          {
            "nome": "Marina Alves",
            "cpf": "045.678.912-33",
            "tipo": "Legal",
            "doc": "rg-representante.jpg"
          }
        ]
      },
      {
        "title": "Contatos",
        "items": [
          {
            "label": "Nome",
            "value": "Marina Alves"
          },
          {
            "label": "Responsabilidades",
            "value": "Principal"
          },
          {
            "label": "E-mail principal",
            "value": "marina@alvescom.com.br"
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 98888-1200"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@marinaalves"
          },
          {
            "mail": true,
            "label": "E-mail para assinatura",
            "value": "marina@alvescom.com.br",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login (Meu Espaço)",
            "value": "marina@alvescom.com.br",
            "usarPrincipal": true
          }
        ]
      },
      {
        "title": "Endereços",
        "items": [
          {
            "label": "CEP",
            "value": "05305-000"
          },
          {
            "label": "Tipo",
            "value": "Comercial"
          },
          {
            "label": "Logradouro",
            "value": "Av. Imperatriz Leopoldina"
          },
          {
            "label": "País",
            "value": "Brasil"
          },
          {
            "label": "Estado",
            "value": "SP"
          },
          {
            "label": "Cidade",
            "value": "São Paulo"
          },
          {
            "label": "Bairro",
            "value": "Vila Leopoldina"
          },
          {
            "label": "Número do endereço",
            "value": "1200"
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Contrato ou estatuto social consolidado",
        "file": "contrato-social.pdf"
      },
      {
        "label": "Cartão de CNPJ",
        "file": "cartao-cnpj.pdf"
      },
      {
        "label": "Ato societário (última eleição e representantes legais)",
        "file": "ata-eleicao.pdf"
      },
      {
        "label": "Documento do representante legal — identificação com foto",
        "file": "rg-representante.jpg"
      },
      {
        "label": "Documento do representante legal — comprovante de residência",
        "file": "comprovante-rep.pdf"
      }
    ],
    "decisao": {
      "tipo": "Aprovado",
      "data": "05/08/2026",
      "motivo": "Documentação conferida e válida.",
      "por": "Carol Ferreira"
    }
  },
  "2": {
    "nome": "Logística Contorno Ltda",
    "tipo": "PJ",
    "status": "Análise humana",
    "email": "contato@contorno.log.br",
    "docNum": "98.765.432/0001-10",
    "boxes": "G-14",
    "unidade": "Guarulhos",
    "seguro": "Sem seguro",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "CNPJ",
            "value": "98.765.432/0001-10"
          },
          {
            "label": "Razão social",
            "value": "Logística Contorno Ltda"
          },
          {
            "label": "Nome fantasia",
            "value": "Contorno Log"
          },
          {
            "label": "Data de fundação",
            "value": "12/03/2015"
          },
          {
            "label": "Natureza jurídica",
            "value": "Sociedade Empresária Limitada"
          },
          {
            "label": "Porte",
            "value": "EPP"
          },
          {
            "label": "Inscrição municipal",
            "value": "1.234.567-8"
          },
          {
            "label": "Inscrição estadual",
            "value": "110.042.490.114"
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": false
          }
        ]
      },
      {
        "title": "Sócios e representantes",
        "quadro": [
          {
            "nome": "Paulo Contorno",
            "cpf": "223.445.667-88",
            "tipo": "Pessoa Física",
            "qualificacao": "Administrador",
            "dataInclusao": "12/03/2015",
            "pais": "105 · BRASIL"
          },
          {
            "nome": "Contorno Holding S.A.",
            "cpf": "22.333.444/0001-55",
            "tipo": "Pessoa Jurídica",
            "qualificacao": "Sócio",
            "dataInclusao": "12/03/2015",
            "pais": "105 · BRASIL"
          }
        ],
        "repLegal": [
          {
            "nome": "Paulo Contorno",
            "cpf": "223.445.667-88",
            "qualificacao": "Administrador"
          }
        ]
      },
      {
        "title": "Representantes e procuradores",
        "reps": [
          {
            "nome": "Paulo Contorno",
            "cpf": "223.445.667-88",
            "tipo": "Legal",
            "doc": "rg-representante.jpg"
          }
        ]
      },
      {
        "title": "Contatos",
        "items": [
          {
            "label": "Nome",
            "value": "Paulo Contorno"
          },
          {
            "label": "Responsabilidades",
            "value": "Principal"
          },
          {
            "label": "E-mail principal",
            "value": "contato@contorno.log.br"
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 97777-3410"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@contornolog"
          },
          {
            "mail": true,
            "label": "E-mail para assinatura",
            "value": "contato@contorno.log.br",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login (Meu Espaço)",
            "value": "contato@contorno.log.br",
            "usarPrincipal": true
          }
        ]
      },
      {
        "title": "Endereços",
        "items": [
          {
            "label": "CEP",
            "value": "07034-000"
          },
          {
            "label": "Tipo",
            "value": "Comercial"
          },
          {
            "label": "Logradouro",
            "value": "Rod. Pres. Dutra, km 225"
          },
          {
            "label": "País",
            "value": "Brasil"
          },
          {
            "label": "Estado",
            "value": "SP"
          },
          {
            "label": "Cidade",
            "value": "Guarulhos"
          },
          {
            "label": "Bairro",
            "value": "Cumbica"
          },
          {
            "label": "Número do endereço",
            "value": "225"
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Contrato ou estatuto social consolidado",
        "file": "contrato-social.pdf"
      },
      {
        "label": "Cartão de CNPJ",
        "file": "cartao-cnpj.pdf"
      },
      {
        "label": "Ato societário (última eleição e representantes legais)",
        "file": "ata-eleicao.pdf"
      },
      {
        "label": "Documento do representante legal — identificação com foto",
        "file": "rg-representante.jpg"
      },
      {
        "label": "Documento do representante legal — comprovante de residência",
        "file": "comprovante-rep.pdf"
      }
    ]
  },
  "3": {
    "nome": "Studio Prisma Arquitetura",
    "tipo": "PF",
    "status": "Pendente de documentação",
    "email": "financeiro@studioprisma.com",
    "docNum": "045.678.912-33",
    "boxes": "O-07",
    "unidade": "Faria Lima",
    "seguro": "MAPFRE",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "Nome do locatário",
            "value": "Studio Prisma Arquitetura"
          },
          {
            "label": "Nacionalidade",
            "value": "Brasileira"
          },
          {
            "label": "CPF",
            "value": "045.678.912-33"
          },
          {
            "label": "Tipo de documento",
            "value": "RG"
          },
          {
            "label": "Número do documento",
            "value": "34.567.890-1"
          },
          {
            "label": "Data de nascimento",
            "value": "18/05/1987"
          },
          {
            "label": "Telefone da pessoa",
            "value": "(11) 96543-2211"
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": false
          }
        ]
      },
      {
        "title": "Contatos",
        "items": [
          {
            "label": "Nome",
            "value": "Studio Prisma Arquitetura"
          },
          {
            "label": "Responsabilidades",
            "value": "Principal"
          },
          {
            "label": "E-mail principal",
            "value": "financeiro@studioprisma.com"
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 96543-2211"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@studioprisma"
          },
          {
            "mail": true,
            "label": "E-mail para assinatura",
            "value": "financeiro@studioprisma.com",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login (Meu Espaço)",
            "value": "financeiro@studioprisma.com",
            "usarPrincipal": true
          }
        ]
      },
      {
        "title": "Endereços",
        "items": [
          {
            "label": "CEP",
            "value": "04538-133"
          },
          {
            "label": "Tipo",
            "value": "Comercial"
          },
          {
            "label": "Logradouro",
            "value": "Av. Brig. Faria Lima"
          },
          {
            "label": "País",
            "value": "Brasil"
          },
          {
            "label": "Estado",
            "value": "SP"
          },
          {
            "label": "Cidade",
            "value": "São Paulo"
          },
          {
            "label": "Bairro",
            "value": "Itaim Bibi"
          },
          {
            "label": "Número do endereço",
            "value": "3477"
          }
        ]
      }
    ],
    "docs": []
  },
  "4": {
    "nome": "Comercial Dez Irmãos Ltda",
    "tipo": "PJ",
    "status": "Reprovado",
    "email": "compras@dezirmaos.com.br",
    "docNum": "33.444.555/0001-77",
    "boxes": "B-21, B-22",
    "unidade": "Barra Funda",
    "seguro": "Seguro próprio",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "CNPJ",
            "value": "33.444.555/0001-77"
          },
          {
            "label": "Razão social",
            "value": "Comercial Dez Irmãos Ltda"
          },
          {
            "label": "Nome fantasia",
            "value": "Dez Irmãos"
          },
          {
            "label": "Data de fundação",
            "value": "12/03/2015"
          },
          {
            "label": "Natureza jurídica",
            "value": "Sociedade Empresária Limitada"
          },
          {
            "label": "Porte",
            "value": "EPP"
          },
          {
            "label": "Inscrição municipal",
            "value": "1.234.567-8"
          },
          {
            "label": "Inscrição estadual",
            "value": "110.042.490.114"
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": true
          }
        ]
      },
      {
        "title": "Sócios e representantes",
        "quadro": [
          {
            "nome": "Ricardo Dez",
            "cpf": "334.556.778-99",
            "tipo": "Pessoa Física",
            "qualificacao": "Administrador",
            "dataInclusao": "12/03/2015",
            "pais": "105 · BRASIL"
          },
          {
            "nome": "Dez Participações Ltda",
            "cpf": "33.555.777/0001-11",
            "tipo": "Pessoa Jurídica",
            "qualificacao": "Sócio",
            "dataInclusao": "12/03/2015",
            "pais": "105 · BRASIL"
          }
        ],
        "repLegal": [
          {
            "nome": "Ricardo Dez",
            "cpf": "334.556.778-99",
            "qualificacao": "Administrador"
          }
        ]
      },
      {
        "title": "Representantes e procuradores",
        "reps": [
          {
            "nome": "Ricardo Dez",
            "cpf": "334.556.778-99",
            "tipo": "Legal",
            "doc": "rg-representante.jpg"
          }
        ]
      },
      {
        "title": "Contatos",
        "items": [
          {
            "label": "Nome",
            "value": "Ricardo Dez"
          },
          {
            "label": "Responsabilidades",
            "value": "Principal"
          },
          {
            "label": "E-mail principal",
            "value": "compras@dezirmaos.com.br"
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 95555-8890"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@dezirmaos"
          },
          {
            "mail": true,
            "label": "E-mail para assinatura",
            "value": "compras@dezirmaos.com.br",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login (Meu Espaço)",
            "value": "compras@dezirmaos.com.br",
            "usarPrincipal": true
          }
        ]
      },
      {
        "title": "Endereços",
        "items": [
          {
            "label": "CEP",
            "value": "01141-000"
          },
          {
            "label": "Tipo",
            "value": "Comercial"
          },
          {
            "label": "Logradouro",
            "value": "Av. Marquês de São Vicente"
          },
          {
            "label": "País",
            "value": "Brasil"
          },
          {
            "label": "Estado",
            "value": "SP"
          },
          {
            "label": "Cidade",
            "value": "São Paulo"
          },
          {
            "label": "Bairro",
            "value": "Barra Funda"
          },
          {
            "label": "Número do endereço",
            "value": "446"
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Contrato ou estatuto social consolidado",
        "file": "contrato-social.pdf"
      },
      {
        "label": "Cartão de CNPJ",
        "file": "cartao-cnpj.pdf",
        "motivo": "Documento vencido — emita a versão atualizada no site da Receita."
      },
      {
        "label": "Ato societário (última eleição e representantes legais)",
        "file": "ata-eleicao.pdf"
      },
      {
        "label": "Documento do representante legal — identificação com foto",
        "file": "rg-representante.jpg"
      },
      {
        "label": "Documento do representante legal — comprovante de residência",
        "file": "comprovante-rep.pdf",
        "motivo": "Comprovante com mais de 90 dias. Envie um recente (últimos 90 dias)."
      }
    ],
    "decisao": {
      "tipo": "Reprovado",
      "data": "05/08/2026",
      "motivo": "Comprovante de residência ilegível — reenviar documento legível.",
      "por": "Carol Ferreira"
    }
  },
  "5": {
    "nome": "Ateliê Norte",
    "tipo": "PF",
    "status": "Inativo",
    "email": "ana@atelienorte.com",
    "docNum": "071.222.333-44",
    "boxes": "—",
    "unidade": "Tatuapé",
    "seguro": "Sem seguro",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "Nome do locatário",
            "value": "Ateliê Norte"
          },
          {
            "label": "Nacionalidade",
            "value": "Brasileira"
          },
          {
            "label": "CPF",
            "value": "071.222.333-44"
          },
          {
            "label": "Tipo de documento",
            "value": "CNH"
          },
          {
            "label": "Número do documento",
            "value": "058.774.221-90"
          },
          {
            "label": "Data de nascimento",
            "value": "02/11/1991"
          },
          {
            "label": "Telefone da pessoa",
            "value": "(11) 94321-7788"
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": false
          }
        ]
      },
      {
        "title": "Contatos",
        "items": [
          {
            "label": "Nome",
            "value": "Ateliê Norte"
          },
          {
            "label": "Responsabilidades",
            "value": "Principal"
          },
          {
            "label": "E-mail principal",
            "value": "ana@atelienorte.com"
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 94321-7788"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@atelienorte"
          },
          {
            "mail": true,
            "label": "E-mail para assinatura",
            "value": "ana@atelienorte.com",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login (Meu Espaço)",
            "value": "ana@atelienorte.com",
            "usarPrincipal": true
          }
        ]
      },
      {
        "title": "Endereços",
        "items": [
          {
            "label": "CEP",
            "value": "03310-000"
          },
          {
            "label": "Tipo",
            "value": "Residencial"
          },
          {
            "label": "Logradouro",
            "value": "Rua Tuiuti"
          },
          {
            "label": "País",
            "value": "Brasil"
          },
          {
            "label": "Estado",
            "value": "SP"
          },
          {
            "label": "Cidade",
            "value": "São Paulo"
          },
          {
            "label": "Bairro",
            "value": "Tatuapé"
          },
          {
            "label": "Número do endereço",
            "value": "1520"
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Documento de identificação com foto",
        "file": "rg-identidade.jpg"
      },
      {
        "label": "Comprovante de residência",
        "file": "comprovante-residencia.pdf"
      }
    ],
    "decisao": {
      "tipo": "Aprovado",
      "data": "12/01/2024",
      "motivo": "Documentação aprovada antes da inativação.",
      "por": "Carol Ferreira"
    }
  },
  "6": {
    "nome": "Transportes Vale Verde Ltda",
    "tipo": "PJ",
    "status": "Pendente de documentação",
    "email": "contato@valeverde.com.br",
    "docNum": "44.555.666/0001-22",
    "boxes": "—",
    "unidade": "Vila Maria",
    "seguro": "Sem seguro",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "CNPJ",
            "value": "44.555.666/0001-22"
          },
          {
            "label": "Razão social",
            "value": "Transportes Vale Verde Ltda"
          },
          {
            "label": "Nome fantasia",
            "value": "Vale Verde"
          },
          {
            "label": "Data de fundação",
            "value": "12/03/2015"
          },
          {
            "label": "Natureza jurídica",
            "value": "Sociedade Empresária Limitada"
          },
          {
            "label": "Porte",
            "value": "EPP"
          },
          {
            "label": "Inscrição municipal",
            "value": "1.234.567-8"
          },
          {
            "label": "Inscrição estadual",
            "value": "110.042.490.114"
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": false
          }
        ]
      },
      {
        "title": "Sócios e representantes",
        "quadro": [
          {
            "nome": "Sérgio Vale",
            "cpf": "512.334.667-01",
            "tipo": "Pessoa Física",
            "qualificacao": "Administrador",
            "dataInclusao": "12/03/2015",
            "pais": "105 · BRASIL"
          },
          {
            "nome": "Verde Holding Ltda",
            "cpf": "44.777.888/0001-33",
            "tipo": "Pessoa Jurídica",
            "qualificacao": "Sócio",
            "dataInclusao": "12/03/2015",
            "pais": "105 · BRASIL"
          }
        ],
        "repLegal": [
          {
            "nome": "Sérgio Vale",
            "cpf": "512.334.667-01",
            "qualificacao": "Administrador"
          }
        ]
      },
      {
        "title": "Representantes e procuradores",
        "reps": [
          {
            "nome": "Sérgio Vale",
            "cpf": "512.334.667-01",
            "tipo": "Legal"
          }
        ]
      },
      {
        "title": "Contatos",
        "items": [
          {
            "label": "Nome",
            "value": "Sérgio Vale"
          },
          {
            "label": "Responsabilidades",
            "value": "Principal"
          },
          {
            "label": "E-mail principal",
            "value": "contato@valeverde.com.br"
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 93222-1100"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@valeverde"
          },
          {
            "mail": true,
            "label": "E-mail para assinatura",
            "value": "contato@valeverde.com.br",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login (Meu Espaço)",
            "value": "contato@valeverde.com.br",
            "usarPrincipal": true
          }
        ]
      },
      {
        "title": "Endereços",
        "items": [
          {
            "label": "CEP",
            "value": "02220-000"
          },
          {
            "label": "Tipo",
            "value": "Comercial"
          },
          {
            "label": "Logradouro",
            "value": "Av. Guilherme Cotching"
          },
          {
            "label": "País",
            "value": "Brasil"
          },
          {
            "label": "Estado",
            "value": "SP"
          },
          {
            "label": "Cidade",
            "value": "São Paulo"
          },
          {
            "label": "Bairro",
            "value": "Vila Maria"
          },
          {
            "label": "Número do endereço",
            "value": "850"
          }
        ]
      }
    ],
    "docs": []
  },
  "7": {
    "nome": "Rafael Monteiro Silva",
    "tipo": "PF",
    "status": "Análise humana",
    "email": "rafael.monteiro@email.com",
    "docNum": "318.994.220-15",
    "boxes": "V-11",
    "unidade": "Vila Mariana",
    "seguro": "MAPFRE",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "Nome do locatário",
            "value": "Rafael Monteiro Silva"
          },
          {
            "label": "Nacionalidade",
            "value": "Brasileira"
          },
          {
            "label": "CPF",
            "value": "318.994.220-15"
          },
          {
            "label": "Tipo de documento",
            "value": "RG"
          },
          {
            "label": "Número do documento",
            "value": "22.334.556-7"
          },
          {
            "label": "Data de nascimento",
            "value": "22/09/1990"
          },
          {
            "label": "Telefone da pessoa",
            "value": "(11) 91234-5678"
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": false
          }
        ]
      },
      {
        "title": "Contatos",
        "items": [
          {
            "label": "Nome",
            "value": "Rafael Monteiro Silva"
          },
          {
            "label": "Responsabilidades",
            "value": "Principal"
          },
          {
            "label": "E-mail principal",
            "value": "rafael.monteiro@email.com"
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 91234-5678"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@rafaelm"
          },
          {
            "mail": true,
            "label": "E-mail para assinatura",
            "value": "rafael.monteiro@email.com",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login (Meu Espaço)",
            "value": "rafael.monteiro@email.com",
            "usarPrincipal": true
          }
        ]
      },
      {
        "title": "Endereços",
        "items": [
          {
            "label": "CEP",
            "value": "04101-000"
          },
          {
            "label": "Tipo",
            "value": "Residencial"
          },
          {
            "label": "Logradouro",
            "value": "Rua Domingos de Morais"
          },
          {
            "label": "País",
            "value": "Brasil"
          },
          {
            "label": "Estado",
            "value": "SP"
          },
          {
            "label": "Cidade",
            "value": "São Paulo"
          },
          {
            "label": "Bairro",
            "value": "Vila Mariana"
          },
          {
            "label": "Número do endereço",
            "value": "210"
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Documento de identificação com foto",
        "file": "rg-identidade.jpg"
      },
      {
        "label": "Comprovante de residência",
        "file": "comprovante-residencia.pdf"
      }
    ]
  },
  "8": {
    "nome": "Bianca Camargo Reis",
    "tipo": "PF",
    "status": "Ativo",
    "email": "bianca.reis@email.com",
    "docNum": "457.223.889-00",
    "boxes": "P-03",
    "unidade": "Pinheiros",
    "seguro": "MAPFRE",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "Nome do locatário",
            "value": "Bianca Camargo Reis"
          },
          {
            "label": "Nacionalidade",
            "value": "Brasileira"
          },
          {
            "label": "CPF",
            "value": "457.223.889-00"
          },
          {
            "label": "Tipo de documento",
            "value": "RG"
          },
          {
            "label": "Número do documento",
            "value": "41.882.330-9"
          },
          {
            "label": "Data de nascimento",
            "value": "14/02/1985"
          },
          {
            "label": "Telefone da pessoa",
            "value": "(11) 90987-6543"
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": false
          }
        ]
      },
      {
        "title": "Contatos",
        "items": [
          {
            "label": "Nome",
            "value": "Bianca Camargo Reis"
          },
          {
            "label": "Responsabilidades",
            "value": "Principal"
          },
          {
            "label": "E-mail principal",
            "value": "bianca.reis@email.com"
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 90987-6543"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@biancareis"
          },
          {
            "mail": true,
            "label": "E-mail para assinatura",
            "value": "bianca.reis@email.com",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login (Meu Espaço)",
            "value": "bianca.reis@email.com",
            "usarPrincipal": true
          }
        ]
      },
      {
        "title": "Endereços",
        "items": [
          {
            "label": "CEP",
            "value": "05409-002"
          },
          {
            "label": "Tipo",
            "value": "Residencial"
          },
          {
            "label": "Logradouro",
            "value": "Rua Cardeal Arcoverde"
          },
          {
            "label": "País",
            "value": "Brasil"
          },
          {
            "label": "Estado",
            "value": "SP"
          },
          {
            "label": "Cidade",
            "value": "São Paulo"
          },
          {
            "label": "Bairro",
            "value": "Pinheiros"
          },
          {
            "label": "Número do endereço",
            "value": "1200"
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Documento de identificação com foto",
        "file": "rg-identidade.jpg"
      },
      {
        "label": "Comprovante de residência",
        "file": "comprovante-residencia.pdf"
      }
    ],
    "decisao": {
      "tipo": "Aprovado",
      "data": "05/08/2026",
      "motivo": "Documentação conferida e válida.",
      "por": "Carol Ferreira"
    }
  },
  "9": {
    "nome": "Otávio Ramos Lima",
    "tipo": "PF",
    "status": "Reprovado",
    "email": "otavio.lima@email.com",
    "docNum": "690.114.552-88",
    "boxes": "—",
    "unidade": "Penha",
    "seguro": "Sem seguro",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "Nome do locatário",
            "value": "Otávio Ramos Lima"
          },
          {
            "label": "Nacionalidade",
            "value": "Brasileira"
          },
          {
            "label": "CPF",
            "value": "690.114.552-88"
          },
          {
            "label": "Tipo de documento",
            "value": "CNH"
          },
          {
            "label": "Número do documento",
            "value": "077.221.556-33"
          },
          {
            "label": "Data de nascimento",
            "value": "30/07/1979"
          },
          {
            "label": "Telefone da pessoa",
            "value": "(11) 98765-1122"
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": false
          }
        ]
      },
      {
        "title": "Contatos",
        "items": [
          {
            "label": "Nome",
            "value": "Otávio Ramos Lima"
          },
          {
            "label": "Responsabilidades",
            "value": "Principal"
          },
          {
            "label": "E-mail principal",
            "value": "otavio.lima@email.com"
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 98765-1122"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@otaviolima"
          },
          {
            "mail": true,
            "label": "E-mail para assinatura",
            "value": "otavio.lima@email.com",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login (Meu Espaço)",
            "value": "otavio.lima@email.com",
            "usarPrincipal": true
          }
        ]
      },
      {
        "title": "Endereços",
        "items": [
          {
            "label": "CEP",
            "value": "03810-000"
          },
          {
            "label": "Tipo",
            "value": "Residencial"
          },
          {
            "label": "Logradouro",
            "value": "Av. São Miguel"
          },
          {
            "label": "País",
            "value": "Brasil"
          },
          {
            "label": "Estado",
            "value": "SP"
          },
          {
            "label": "Cidade",
            "value": "São Paulo"
          },
          {
            "label": "Bairro",
            "value": "Penha"
          },
          {
            "label": "Número do endereço",
            "value": "640"
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Documento de identificação com foto",
        "file": "rg-identidade.jpg"
      },
      {
        "label": "Comprovante de residência",
        "file": "comprovante-residencia.pdf",
        "motivo": "Documento ilegível — reenvie uma imagem/PDF nítido e completo."
      }
    ],
    "decisao": {
      "tipo": "Reprovado",
      "data": "05/08/2026",
      "motivo": "Comprovante de residência ilegível — reenviar documento legível.",
      "por": "Carol Ferreira"
    }
  },
  "10": {
    "nome": "Padaria União Ltda",
    "tipo": "PJ",
    "status": "Inativo",
    "email": "contato@paouniao.com.br",
    "docNum": "55.666.777/0001-44",
    "boxes": "U-09",
    "unidade": "Brás",
    "seguro": "Seguro próprio",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "CNPJ",
            "value": "55.666.777/0001-44"
          },
          {
            "label": "Razão social",
            "value": "Padaria União Ltda"
          },
          {
            "label": "Nome fantasia",
            "value": "Pão União"
          },
          {
            "label": "Data de fundação",
            "value": "12/03/2015"
          },
          {
            "label": "Natureza jurídica",
            "value": "Sociedade Empresária Limitada"
          },
          {
            "label": "Porte",
            "value": "EPP"
          },
          {
            "label": "Inscrição municipal",
            "value": "1.234.567-8"
          },
          {
            "label": "Inscrição estadual",
            "value": "110.042.490.114"
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": false
          }
        ]
      },
      {
        "title": "Sócios e representantes",
        "quadro": [
          {
            "nome": "Antônio União",
            "cpf": "221.556.889-04",
            "tipo": "Pessoa Física",
            "qualificacao": "Administrador",
            "dataInclusao": "12/03/2015",
            "pais": "105 · BRASIL"
          },
          {
            "nome": "União Participações Ltda",
            "cpf": "55.888.999/0001-55",
            "tipo": "Pessoa Jurídica",
            "qualificacao": "Sócio",
            "dataInclusao": "12/03/2015",
            "pais": "105 · BRASIL"
          }
        ],
        "repLegal": [
          {
            "nome": "Antônio União",
            "cpf": "221.556.889-04",
            "qualificacao": "Administrador"
          }
        ]
      },
      {
        "title": "Representantes e procuradores",
        "reps": [
          {
            "nome": "Antônio União",
            "cpf": "221.556.889-04",
            "tipo": "Legal",
            "doc": "rg-representante.jpg"
          }
        ]
      },
      {
        "title": "Contatos",
        "items": [
          {
            "label": "Nome",
            "value": "Antônio União"
          },
          {
            "label": "Responsabilidades",
            "value": "Principal"
          },
          {
            "label": "E-mail principal",
            "value": "contato@paouniao.com.br"
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 92345-6677"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@paouniao"
          },
          {
            "mail": true,
            "label": "E-mail para assinatura",
            "value": "contato@paouniao.com.br",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login (Meu Espaço)",
            "value": "contato@paouniao.com.br",
            "usarPrincipal": true
          }
        ]
      },
      {
        "title": "Endereços",
        "items": [
          {
            "label": "CEP",
            "value": "03047-000"
          },
          {
            "label": "Tipo",
            "value": "Comercial"
          },
          {
            "label": "Logradouro",
            "value": "Rua do Hipódromo"
          },
          {
            "label": "País",
            "value": "Brasil"
          },
          {
            "label": "Estado",
            "value": "SP"
          },
          {
            "label": "Cidade",
            "value": "São Paulo"
          },
          {
            "label": "Bairro",
            "value": "Brás"
          },
          {
            "label": "Número do endereço",
            "value": "320"
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Contrato ou estatuto social consolidado",
        "file": "contrato-social.pdf"
      },
      {
        "label": "Cartão de CNPJ",
        "file": "cartao-cnpj.pdf"
      },
      {
        "label": "Ato societário (última eleição e representantes legais)",
        "file": "ata-eleicao.pdf"
      },
      {
        "label": "Documento do representante legal — identificação com foto",
        "file": "rg-representante.jpg"
      },
      {
        "label": "Documento do representante legal — comprovante de residência",
        "file": "comprovante-rep.pdf"
      }
    ],
    "decisao": {
      "tipo": "Aprovado",
      "data": "12/01/2024",
      "motivo": "Documentação aprovada antes da inativação.",
      "por": "Carol Ferreira"
    }
  }
};
