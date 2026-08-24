/* Dados simulados de locatário (Exibição/Listagem). 20 casos + validação manual de CPF/CNPJ. Endereço: CEP, Logradouro, Número de endereço, Complemento, País, Estado, Cidade. */
window.LOCATARIOS = {
  "1": {
    "nome": "Marina Alves Comércio Ltda",
    "tipo": "PJ",
    "status": "Ativo",
    "contratoAtivo": true,
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
            "label": "E-mail principal",
            "value": "marina@alvescom.com.br"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "marina@alvescom.com.br",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "marina@alvescom.com.br",
            "usarPrincipal": true
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": true
          }
        ]
      },
      {
        "title": "Sócios",
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
        ]
      },
      {
        "title": "Representantes",
        "reps": [
          {
            "nome": "Marina Alves",
            "cpf": "045.678.912-33",
            "cargo": "Administrador",
            "tipo": "Legal",
            "email": "marina@alvescom.com.br",
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
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "marina@alvescom.com.br",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 98888-1200"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@marinaalves"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "05305-000"
          },
          {
            "label": "Logradouro",
            "value": "Av. Imperatriz Leopoldina"
          },
          {
            "label": "Número de endereço",
            "value": "1200"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Contrato ou estatuto social consolidado",
        "file": "contrato-social.pdf",
        "emissao": "10/03/2015",
        "validade": "10/03/2020"
      },
      {
        "label": "Cartão de CNPJ",
        "file": "cartao-cnpj.pdf",
        "emissao": "05/08/2026",
        "validade": "04/09/2026"
      },
      {
        "label": "Ato societário (última eleição e representantes legais)",
        "file": "ata-eleicao.pdf",
        "emissao": "22/06/2023",
        "validade": "22/06/2028"
      },
      {
        "label": "Comprovante de residência da empresa",
        "file": "comprovante-rep.pdf",
        "emissao": "01/07/2026",
        "validade": "01/07/2031"
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
    "status": "Em análise",
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
            "label": "E-mail principal",
            "value": "contato@contorno.log.br"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "contato@contorno.log.br",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "contato@contorno.log.br",
            "usarPrincipal": true
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": false
          }
        ]
      },
      {
        "title": "Sócios",
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
        ]
      },
      {
        "title": "Representantes",
        "reps": [
          {
            "nome": "Paulo Contorno",
            "cpf": "223.445.667-88",
            "cargo": "Administrador",
            "tipo": "Legal",
            "email": "contato@contorno.log.br",
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
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "contato@contorno.log.br",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 97777-3410"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@contornolog"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "07034-000"
          },
          {
            "label": "Logradouro",
            "value": "Rod. Pres. Dutra, km 225"
          },
          {
            "label": "Número de endereço",
            "value": "225"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Contrato ou estatuto social consolidado",
        "file": "contrato-social.pdf",
        "emissao": "10/03/2015",
        "validade": "10/03/2020"
      },
      {
        "label": "Cartão de CNPJ",
        "file": "cartao-cnpj.pdf",
        "emissao": "05/08/2026",
        "validade": "04/09/2026"
      },
      {
        "label": "Ato societário (última eleição e representantes legais)",
        "file": "ata-eleicao.pdf",
        "emissao": "22/06/2023",
        "validade": "22/06/2028"
      },
      {
        "label": "Comprovante de residência da empresa",
        "file": "comprovante-rep.pdf",
        "emissao": "01/07/2026",
        "validade": "01/07/2031"
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
            "label": "E-mail principal",
            "value": "financeiro@studioprisma.com"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "financeiro@studioprisma.com",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "financeiro@studioprisma.com",
            "usarPrincipal": true
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
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "financeiro@studioprisma.com",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 96543-2211"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@studioprisma"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "04538-133"
          },
          {
            "label": "Logradouro",
            "value": "Av. Brig. Faria Lima"
          },
          {
            "label": "Número de endereço",
            "value": "3477"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": []
  },
  "4": {
    "nome": "Comercial Dez Irmãos Ltda",
    "tipo": "PJ",
    "status": "Pendente de documentação",
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
            "label": "E-mail principal",
            "value": "compras@dezirmaos.com.br"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "compras@dezirmaos.com.br",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "compras@dezirmaos.com.br",
            "usarPrincipal": true
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": true
          }
        ]
      },
      {
        "title": "Sócios",
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
        ]
      },
      {
        "title": "Representantes",
        "reps": [
          {
            "nome": "Ricardo Dez",
            "cpf": "334.556.778-99",
            "cargo": "Administrador",
            "tipo": "Legal",
            "email": "compras@dezirmaos.com.br",
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
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "compras@dezirmaos.com.br",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 95555-8890"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@dezirmaos"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "01141-000"
          },
          {
            "label": "Logradouro",
            "value": "Av. Marquês de São Vicente"
          },
          {
            "label": "Número de endereço",
            "value": "446"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Contrato ou estatuto social consolidado",
        "file": "contrato-social.pdf",
        "validade": "10/03/2030"
      },
      {
        "label": "Cartão de CNPJ",
        "file": "cartao-cnpj.pdf",
        "motivo": "Documento vencido — emita a versão atualizada no site da Receita.",
        "validade": "10/03/2030"
      },
      {
        "label": "Ato societário (última eleição e representantes legais)",
        "file": "ata-eleicao.pdf",
        "validade": "10/03/2030"
      },
      {
        "label": "Comprovante de residência da empresa",
        "file": "comprovante-rep.pdf",
        "motivo": "Comprovante com mais de 90 dias. Envie um recente (últimos 90 dias).",
        "validade": "10/03/2030"
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
            "label": "E-mail principal",
            "value": "ana@atelienorte.com"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "ana@atelienorte.com",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "ana@atelienorte.com",
            "usarPrincipal": true
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
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "ana@atelienorte.com",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 94321-7788"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@atelienorte"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "03310-000"
          },
          {
            "label": "Logradouro",
            "value": "Rua Tuiuti"
          },
          {
            "label": "Número de endereço",
            "value": "1520"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Documento de identificação com foto",
        "file": "rg-identidade.jpg",
        "validade": "10/03/2030"
      },
      {
        "label": "Comprovante de residência",
        "file": "comprovante-residencia.pdf",
        "validade": "10/03/2030"
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
            "label": "E-mail principal",
            "value": "contato@valeverde.com.br"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "contato@valeverde.com.br",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "contato@valeverde.com.br",
            "usarPrincipal": true
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": false
          }
        ]
      },
      {
        "title": "Sócios",
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
        ]
      },
      {
        "title": "Representantes",
        "reps": [
          {
            "nome": "Sérgio Vale",
            "cpf": "512.334.667-01",
            "cargo": "Administrador",
            "tipo": "Legal",
            "email": "contato@valeverde.com.br"
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
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "contato@valeverde.com.br",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 93222-1100"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@valeverde"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "02220-000"
          },
          {
            "label": "Logradouro",
            "value": "Av. Guilherme Cotching"
          },
          {
            "label": "Número de endereço",
            "value": "850"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": []
  },
  "7": {
    "nome": "Rafael Monteiro Silva",
    "tipo": "PF",
    "status": "Validação manual",
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
            "label": "E-mail principal",
            "value": "rafael.monteiro@email.com"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "rafael.monteiro@email.com",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "rafael.monteiro@email.com",
            "usarPrincipal": true
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
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "rafael.monteiro@email.com",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 91234-5678"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@rafaelm"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "04101-000"
          },
          {
            "label": "Logradouro",
            "value": "Rua Domingos de Morais"
          },
          {
            "label": "Número de endereço",
            "value": "210"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Documento de identificação com foto",
        "file": "rg-identidade.jpg",
        "validade": "10/03/2030"
      },
      {
        "label": "Comprovante de residência",
        "file": "comprovante-residencia.pdf",
        "validade": "10/03/2030"
      }
    ]
  },
  "8": {
    "nome": "Bianca Camargo Reis",
    "tipo": "PF",
    "status": "Ativo",
    "pendenciaFinanceira": true,
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
            "label": "E-mail principal",
            "value": "bianca.reis@email.com"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "bianca.reis@email.com",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "bianca.reis@email.com",
            "usarPrincipal": true
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
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "bianca.reis@email.com",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 90987-6543"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@biancareis"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "05409-002"
          },
          {
            "label": "Logradouro",
            "value": "Rua Cardeal Arcoverde"
          },
          {
            "label": "Número de endereço",
            "value": "1200"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Documento de identificação com foto",
        "file": "rg-identidade.jpg",
        "validade": "10/03/2030"
      },
      {
        "label": "Comprovante de residência",
        "file": "comprovante-residencia.pdf",
        "validade": "10/03/2030"
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
    "status": "Pendente de documentação",
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
            "label": "E-mail principal",
            "value": "otavio.lima@email.com"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "otavio.lima@email.com",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "otavio.lima@email.com",
            "usarPrincipal": true
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
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "otavio.lima@email.com",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 98765-1122"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@otaviolima"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "03810-000"
          },
          {
            "label": "Logradouro",
            "value": "Av. São Miguel"
          },
          {
            "label": "Número de endereço",
            "value": "640"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Documento de identificação com foto",
        "file": "rg-identidade.jpg",
        "validade": "10/03/2030"
      },
      {
        "label": "Comprovante de residência",
        "file": "comprovante-residencia.pdf",
        "motivo": "Documento ilegível — reenvie uma imagem/PDF nítido e completo.",
        "validade": "10/03/2030"
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
            "label": "E-mail principal",
            "value": "contato@paouniao.com.br"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "contato@paouniao.com.br",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "contato@paouniao.com.br",
            "usarPrincipal": true
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": false
          }
        ]
      },
      {
        "title": "Sócios",
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
        ]
      },
      {
        "title": "Representantes",
        "reps": [
          {
            "nome": "Antônio União",
            "cpf": "221.556.889-04",
            "cargo": "Administrador",
            "tipo": "Legal",
            "email": "contato@paouniao.com.br",
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
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "contato@paouniao.com.br",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 92345-6677"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@paouniao"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "03047-000"
          },
          {
            "label": "Logradouro",
            "value": "Rua do Hipódromo"
          },
          {
            "label": "Número de endereço",
            "value": "320"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Contrato ou estatuto social consolidado",
        "file": "contrato-social.pdf",
        "emissao": "10/03/2015",
        "validade": "10/03/2020"
      },
      {
        "label": "Cartão de CNPJ",
        "file": "cartao-cnpj.pdf",
        "emissao": "05/08/2026",
        "validade": "04/09/2026"
      },
      {
        "label": "Ato societário (última eleição e representantes legais)",
        "file": "ata-eleicao.pdf",
        "emissao": "22/06/2023",
        "validade": "22/06/2028"
      },
      {
        "label": "Comprovante de residência da empresa",
        "file": "comprovante-rep.pdf",
        "emissao": "01/07/2026",
        "validade": "01/07/2031"
      }
    ],
    "decisao": {
      "tipo": "Aprovado",
      "data": "12/01/2024",
      "motivo": "Documentação aprovada antes da inativação.",
      "por": "Carol Ferreira"
    }
  },
  "11": {
    "nome": "Beatriz Nogueira Lima",
    "tipo": "PF",
    "status": "Ativo",
    "email": "beatriz.lima@email.com",
    "docNum": "401.223.870-56",
    "boxes": "P-02",
    "unidade": "Pinheiros",
    "seguro": "MAPFRE",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "Nome do locatário",
            "value": "Beatriz Nogueira Lima"
          },
          {
            "label": "Nacionalidade",
            "value": "Brasileira"
          },
          {
            "label": "CPF",
            "value": "401.223.870-56"
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
            "label": "E-mail principal",
            "value": "rafael.monteiro@email.com"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "rafael.monteiro@email.com",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "rafael.monteiro@email.com",
            "usarPrincipal": true
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
            "value": "Beatriz Nogueira Lima"
          },
          {
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "rafael.monteiro@email.com",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 91234-5678"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@rafaelm"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "04101-000"
          },
          {
            "label": "Logradouro",
            "value": "Rua Domingos de Morais"
          },
          {
            "label": "Número de endereço",
            "value": "210"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Documento de identificação com foto",
        "file": "rg-identidade.jpg",
        "validade": "10/03/2030"
      },
      {
        "label": "Comprovante de residência",
        "file": "comprovante-residencia.pdf",
        "validade": "10/03/2030"
      }
    ]
  },
  "12": {
    "nome": "Carlos Eduardo Ramos",
    "tipo": "PF",
    "status": "Em análise",
    "email": "carlos.ramos@email.com",
    "docNum": "512.667.900-31",
    "boxes": "S-07",
    "unidade": "Santo Amaro",
    "seguro": "MAPFRE",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "Nome do locatário",
            "value": "Carlos Eduardo Ramos"
          },
          {
            "label": "Nacionalidade",
            "value": "Brasileira"
          },
          {
            "label": "CPF",
            "value": "512.667.900-31"
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
            "label": "E-mail principal",
            "value": "rafael.monteiro@email.com"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "rafael.monteiro@email.com",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "rafael.monteiro@email.com",
            "usarPrincipal": true
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
            "value": "Carlos Eduardo Ramos"
          },
          {
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "rafael.monteiro@email.com",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 91234-5678"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@rafaelm"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "04101-000"
          },
          {
            "label": "Logradouro",
            "value": "Rua Domingos de Morais"
          },
          {
            "label": "Número de endereço",
            "value": "210"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Documento de identificação com foto",
        "file": "rg-identidade.jpg",
        "validade": "10/03/2030"
      },
      {
        "label": "Comprovante de residência",
        "file": "comprovante-residencia.pdf",
        "validade": "10/03/2030"
      }
    ]
  },
  "13": {
    "nome": "Débora Farias Pinto",
    "tipo": "PF",
    "status": "Em análise",
    "email": "débora.pinto@email.com",
    "docNum": "623.114.558-09",
    "boxes": "T-19",
    "unidade": "Tatuapé",
    "seguro": "MAPFRE",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "Nome do locatário",
            "value": "Débora Farias Pinto"
          },
          {
            "label": "Nacionalidade",
            "value": "Brasileira"
          },
          {
            "label": "CPF",
            "value": "623.114.558-09"
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
            "label": "E-mail principal",
            "value": "rafael.monteiro@email.com"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "rafael.monteiro@email.com",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "rafael.monteiro@email.com",
            "usarPrincipal": true
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
            "value": "Débora Farias Pinto"
          },
          {
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "rafael.monteiro@email.com",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 91234-5678"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@rafaelm"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "04101-000"
          },
          {
            "label": "Logradouro",
            "value": "Rua Domingos de Morais"
          },
          {
            "label": "Número de endereço",
            "value": "210"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Documento de identificação com foto",
        "file": "rg-identidade.jpg",
        "validade": "10/03/2030"
      },
      {
        "label": "Comprovante de residência",
        "file": "comprovante-residencia.pdf",
        "validade": "10/03/2030"
      }
    ]
  },
  "14": {
    "nome": "Eduardo Tavares Melo",
    "tipo": "PF",
    "status": "Pendente de Validação Manual",
    "email": "eduardo.melo@email.com",
    "docNum": "734.889.201-77",
    "boxes": "L-05",
    "unidade": "Lapa",
    "seguro": "MAPFRE",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "Nome do locatário",
            "value": "Eduardo Tavares Melo"
          },
          {
            "label": "Nacionalidade",
            "value": "Brasileira"
          },
          {
            "label": "CPF",
            "value": "734.889.201-77"
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
            "label": "E-mail principal",
            "value": "rafael.monteiro@email.com"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "rafael.monteiro@email.com",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "rafael.monteiro@email.com",
            "usarPrincipal": true
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
            "value": "Eduardo Tavares Melo"
          },
          {
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "rafael.monteiro@email.com",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 91234-5678"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@rafaelm"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "04101-000"
          },
          {
            "label": "Logradouro",
            "value": "Rua Domingos de Morais"
          },
          {
            "label": "Número de endereço",
            "value": "210"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Documento de identificação com foto",
        "file": "rg-identidade.jpg",
        "validade": "10/03/2030"
      },
      {
        "label": "Comprovante de residência",
        "file": "comprovante-residencia.pdf",
        "validade": "10/03/2030"
      }
    ],
    "cpfManual": true
  },
  "15": {
    "nome": "Fernanda Quirino Sá",
    "tipo": "PF",
    "status": "Inativo",
    "email": "fernanda.sá@email.com",
    "docNum": "845.550.132-44",
    "boxes": "I-12",
    "unidade": "Ipiranga",
    "seguro": "MAPFRE",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "Nome do locatário",
            "value": "Fernanda Quirino Sá"
          },
          {
            "label": "Nacionalidade",
            "value": "Brasileira"
          },
          {
            "label": "CPF",
            "value": "845.550.132-44"
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
            "label": "E-mail principal",
            "value": "rafael.monteiro@email.com"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "rafael.monteiro@email.com",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "rafael.monteiro@email.com",
            "usarPrincipal": true
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
            "value": "Fernanda Quirino Sá"
          },
          {
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "rafael.monteiro@email.com",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 91234-5678"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@rafaelm"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "04101-000"
          },
          {
            "label": "Logradouro",
            "value": "Rua Domingos de Morais"
          },
          {
            "label": "Número de endereço",
            "value": "210"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Documento de identificação com foto",
        "file": "rg-identidade.jpg",
        "validade": "10/03/2030"
      },
      {
        "label": "Comprovante de residência",
        "file": "comprovante-residencia.pdf",
        "validade": "10/03/2030"
      }
    ]
  },
  "16": {
    "nome": "Aurora Distribuidora Ltda",
    "tipo": "PJ",
    "status": "Ativo",
    "email": "contato@aurora.com.br",
    "docNum": "12.884.706/0001-55",
    "boxes": "B-21",
    "unidade": "Barueri",
    "seguro": "MAPFRE",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "CNPJ",
            "value": "12.884.706/0001-55"
          },
          {
            "label": "Razão social",
            "value": "Aurora Distribuidora Ltda"
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
            "label": "E-mail principal",
            "value": "marina@alvescom.com.br"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "marina@alvescom.com.br",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "marina@alvescom.com.br",
            "usarPrincipal": true
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": true
          }
        ]
      },
      {
        "title": "Sócios",
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
        ]
      },
      {
        "title": "Representantes",
        "reps": [
          {
            "nome": "Marina Alves",
            "cpf": "045.678.912-33",
            "cargo": "Administrador",
            "tipo": "Legal",
            "email": "marina@alvescom.com.br",
            "doc": "rg-representante.jpg"
          }
        ]
      },
      {
        "title": "Contatos",
        "items": [
          {
            "label": "Nome",
            "value": "Aurora Distribuidora Ltda"
          },
          {
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "marina@alvescom.com.br",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 98888-1200"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@marinaalves"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "05305-000"
          },
          {
            "label": "Logradouro",
            "value": "Av. Imperatriz Leopoldina"
          },
          {
            "label": "Número de endereço",
            "value": "1200"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Contrato ou estatuto social consolidado",
        "file": "contrato-social.pdf",
        "emissao": "10/03/2015",
        "validade": "10/03/2020"
      },
      {
        "label": "Cartão de CNPJ",
        "file": "cartao-cnpj.pdf",
        "emissao": "05/08/2026",
        "validade": "04/09/2026"
      },
      {
        "label": "Ato societário (última eleição e representantes legais)",
        "file": "ata-eleicao.pdf",
        "emissao": "22/06/2023",
        "validade": "22/06/2028"
      },
      {
        "label": "Comprovante de residência da empresa",
        "file": "comprovante-rep.pdf",
        "emissao": "01/07/2026",
        "validade": "01/07/2031"
      }
    ],
    "decisao": {
      "tipo": "Aprovado",
      "data": "05/08/2026",
      "motivo": "Documentação conferida e válida.",
      "por": "Carol Ferreira"
    }
  },
  "17": {
    "nome": "Bravo Log Transportes Ltda",
    "tipo": "PJ",
    "status": "Em análise",
    "email": "contato@bravo.com.br",
    "docNum": "23.556.910/0001-08",
    "boxes": "O-03",
    "unidade": "Osasco",
    "seguro": "MAPFRE",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "CNPJ",
            "value": "23.556.910/0001-08"
          },
          {
            "label": "Razão social",
            "value": "Bravo Log Transportes Ltda"
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
            "label": "E-mail principal",
            "value": "marina@alvescom.com.br"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "marina@alvescom.com.br",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "marina@alvescom.com.br",
            "usarPrincipal": true
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": true
          }
        ]
      },
      {
        "title": "Sócios",
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
        ]
      },
      {
        "title": "Representantes",
        "reps": [
          {
            "nome": "Marina Alves",
            "cpf": "045.678.912-33",
            "cargo": "Administrador",
            "tipo": "Legal",
            "email": "marina@alvescom.com.br",
            "doc": "rg-representante.jpg"
          }
        ]
      },
      {
        "title": "Contatos",
        "items": [
          {
            "label": "Nome",
            "value": "Bravo Log Transportes Ltda"
          },
          {
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "marina@alvescom.com.br",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 98888-1200"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@marinaalves"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "05305-000"
          },
          {
            "label": "Logradouro",
            "value": "Av. Imperatriz Leopoldina"
          },
          {
            "label": "Número de endereço",
            "value": "1200"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Contrato ou estatuto social consolidado",
        "file": "contrato-social.pdf",
        "emissao": "10/03/2015",
        "validade": "10/03/2020"
      },
      {
        "label": "Cartão de CNPJ",
        "file": "cartao-cnpj.pdf",
        "emissao": "05/08/2026",
        "validade": "04/09/2026"
      },
      {
        "label": "Ato societário (última eleição e representantes legais)",
        "file": "ata-eleicao.pdf",
        "emissao": "22/06/2023",
        "validade": "22/06/2028"
      },
      {
        "label": "Comprovante de residência da empresa",
        "file": "comprovante-rep.pdf",
        "emissao": "01/07/2026",
        "validade": "01/07/2031"
      }
    ],
    "decisao": {
      "tipo": "Aprovado",
      "data": "05/08/2026",
      "motivo": "Documentação conferida e válida.",
      "por": "Carol Ferreira"
    }
  },
  "18": {
    "nome": "Cobalto Serviços Ltda",
    "tipo": "PJ",
    "status": "Validação manual",
    "email": "contato@cobalto.com.br",
    "docNum": "34.667.021/0001-90",
    "boxes": "C-14",
    "unidade": "Campinas",
    "seguro": "MAPFRE",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "CNPJ",
            "value": "34.667.021/0001-90"
          },
          {
            "label": "Razão social",
            "value": "Cobalto Serviços Ltda"
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
            "label": "E-mail principal",
            "value": "marina@alvescom.com.br"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "marina@alvescom.com.br",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "marina@alvescom.com.br",
            "usarPrincipal": true
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": true
          }
        ]
      },
      {
        "title": "Sócios",
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
        ]
      },
      {
        "title": "Representantes",
        "reps": [
          {
            "nome": "Marina Alves",
            "cpf": "045.678.912-33",
            "cargo": "Administrador",
            "tipo": "Legal",
            "email": "marina@alvescom.com.br",
            "doc": "rg-representante.jpg"
          }
        ]
      },
      {
        "title": "Contatos",
        "items": [
          {
            "label": "Nome",
            "value": "Cobalto Serviços Ltda"
          },
          {
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "marina@alvescom.com.br",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 98888-1200"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@marinaalves"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "05305-000"
          },
          {
            "label": "Logradouro",
            "value": "Av. Imperatriz Leopoldina"
          },
          {
            "label": "Número de endereço",
            "value": "1200"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Contrato ou estatuto social consolidado",
        "file": "contrato-social.pdf",
        "emissao": "10/03/2015",
        "validade": "10/03/2020"
      },
      {
        "label": "Cartão de CNPJ",
        "file": "cartao-cnpj.pdf",
        "emissao": "05/08/2026",
        "validade": "04/09/2026"
      },
      {
        "label": "Ato societário (última eleição e representantes legais)",
        "file": "ata-eleicao.pdf",
        "emissao": "22/06/2023",
        "validade": "22/06/2028"
      },
      {
        "label": "Comprovante de residência da empresa",
        "file": "comprovante-rep.pdf",
        "emissao": "01/07/2026",
        "validade": "01/07/2031"
      }
    ],
    "decisao": {
      "tipo": "Aprovado",
      "data": "05/08/2026",
      "motivo": "Documentação conferida e válida.",
      "por": "Carol Ferreira"
    }
  },
  "19": {
    "nome": "Delta Prime Comércio Ltda",
    "tipo": "PJ",
    "status": "Pendente de Validação Manual",
    "email": "contato@delta.com.br",
    "docNum": "45.778.132/0001-33",
    "boxes": "J-08",
    "unidade": "Jundiaí",
    "seguro": "MAPFRE",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "CNPJ",
            "value": "45.778.132/0001-33"
          },
          {
            "label": "Razão social",
            "value": "Delta Prime Comércio Ltda"
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
            "label": "E-mail principal",
            "value": "marina@alvescom.com.br"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "marina@alvescom.com.br",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "marina@alvescom.com.br",
            "usarPrincipal": true
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": true
          }
        ]
      },
      {
        "title": "Sócios",
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
        ]
      },
      {
        "title": "Representantes",
        "reps": [
          {
            "nome": "Marina Alves",
            "cpf": "045.678.912-33",
            "cargo": "Administrador",
            "tipo": "Legal",
            "email": "marina@alvescom.com.br",
            "doc": "rg-representante.jpg"
          }
        ]
      },
      {
        "title": "Contatos",
        "items": [
          {
            "label": "Nome",
            "value": "Delta Prime Comércio Ltda"
          },
          {
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "marina@alvescom.com.br",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 98888-1200"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@marinaalves"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "05305-000"
          },
          {
            "label": "Logradouro",
            "value": "Av. Imperatriz Leopoldina"
          },
          {
            "label": "Número de endereço",
            "value": "1200"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Contrato ou estatuto social consolidado",
        "file": "contrato-social.pdf",
        "emissao": "10/03/2015",
        "validade": "10/03/2020"
      },
      {
        "label": "Cartão de CNPJ",
        "file": "cartao-cnpj.pdf",
        "emissao": "05/08/2026",
        "validade": "04/09/2026"
      },
      {
        "label": "Ato societário (última eleição e representantes legais)",
        "file": "ata-eleicao.pdf",
        "emissao": "22/06/2023",
        "validade": "22/06/2028"
      },
      {
        "label": "Comprovante de residência da empresa",
        "file": "comprovante-rep.pdf",
        "emissao": "01/07/2026",
        "validade": "01/07/2031"
      }
    ],
    "decisao": {
      "tipo": "Aprovado",
      "data": "05/08/2026",
      "motivo": "Documentação conferida e válida.",
      "por": "Carol Ferreira"
    },
    "cpfManual": true
  },
  "20": {
    "nome": "Everest Holding Ltda",
    "tipo": "PJ",
    "status": "Inativo",
    "email": "contato@everest.com.br",
    "docNum": "56.889.243/0001-76",
    "boxes": "SO-01",
    "unidade": "Sorocaba",
    "seguro": "MAPFRE",
    "dados": [
      {
        "title": "Identificação",
        "items": [
          {
            "label": "CNPJ",
            "value": "56.889.243/0001-76"
          },
          {
            "label": "Razão social",
            "value": "Everest Holding Ltda"
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
            "label": "E-mail principal",
            "value": "marina@alvescom.com.br"
          },
          {
            "mail": true,
            "label": "E-mail de assinatura de contrato",
            "value": "marina@alvescom.com.br",
            "usarPrincipal": true
          },
          {
            "mail": true,
            "label": "E-mail de login do Meu Espaço",
            "value": "marina@alvescom.com.br",
            "usarPrincipal": true
          },
          {
            "check": true,
            "label": "Pessoa contribuinte do IBS e da CBS",
            "checked": true
          }
        ]
      },
      {
        "title": "Sócios",
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
        ]
      },
      {
        "title": "Representantes",
        "reps": [
          {
            "nome": "Marina Alves",
            "cpf": "045.678.912-33",
            "cargo": "Administrador",
            "tipo": "Legal",
            "email": "marina@alvescom.com.br",
            "doc": "rg-representante.jpg"
          }
        ]
      },
      {
        "title": "Contatos",
        "items": [
          {
            "label": "Nome",
            "value": "Everest Holding Ltda"
          },
          {
            "label": "Responsabilidade",
            "value": "Administrativo"
          },
          {
            "label": "E-mail",
            "value": "marina@alvescom.com.br",
            "assina": true
          },
          {
            "label": "Telefone / WhatsApp",
            "value": "(11) 98888-1200"
          },
          {
            "label": "Usuário do WhatsApp",
            "value": "@marinaalves"
          }
        ]
      },
      {
        "title": "Endereço",
        "items": [
          {
            "label": "CEP",
            "value": "05305-000"
          },
          {
            "label": "Logradouro",
            "value": "Av. Imperatriz Leopoldina"
          },
          {
            "label": "Número de endereço",
            "value": "1200"
          },
          {
            "label": "Complemento",
            "value": ""
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
          }
        ]
      }
    ],
    "docs": [
      {
        "label": "Contrato ou estatuto social consolidado",
        "file": "contrato-social.pdf",
        "emissao": "10/03/2015",
        "validade": "10/03/2020"
      },
      {
        "label": "Cartão de CNPJ",
        "file": "cartao-cnpj.pdf",
        "emissao": "05/08/2026",
        "validade": "04/09/2026"
      },
      {
        "label": "Ato societário (última eleição e representantes legais)",
        "file": "ata-eleicao.pdf",
        "emissao": "22/06/2023",
        "validade": "22/06/2028"
      },
      {
        "label": "Comprovante de residência da empresa",
        "file": "comprovante-rep.pdf",
        "emissao": "01/07/2026",
        "validade": "01/07/2031"
      }
    ],
    "decisao": {
      "tipo": "Aprovado",
      "data": "05/08/2026",
      "motivo": "Documentação conferida e válida.",
      "por": "Carol Ferreira"
    }
  }
};
