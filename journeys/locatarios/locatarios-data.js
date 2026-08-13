/* Dados simulados de cadastro por locatário (para a tela de Exibição).
   Estrutura espelha as seções do cadastro: Identificação, Representantes (PJ), Contatos, Endereços. */
window.LOCATARIOS = {
  "1": {
    nome: "Marina Alves Comércio Ltda", tipo: "PJ", status: "Ativo",
    dados: [
      { title: "Identificação", items: [
        { label: "CNPJ", value: "12.345.678/0001-90" },
        { label: "Razão social", value: "Marina Alves Comércio Ltda" },
        { label: "Nome fantasia", value: "Alves Comércio" },
        { label: "Data de fundação", value: "12/03/2015" },
        { label: "Natureza jurídica", value: "Sociedade Empresária Limitada" },
        { label: "Porte", value: "EPP" },
        { label: "Inscrição municipal", value: "1.234.567-8" },
        { label: "Inscrição estadual", value: "110.042.490.114" },
        { check: true, label: "Pessoa contribuinte do IBS e da CBS", checked: true }
      ]},
      { title: "Representantes e procuradores", reps: [
        { nome: "Marina Alves", cpf: "045.678.912-33", tipo: "Legal", doc: "rg-marina-alves.jpg" },
        { nome: "Carlos Alves", cpf: "128.334.567-01", tipo: "Procurador", doc: "cnh-carlos-alves.jpg" }
      ]},
      { title: "Contatos", items: [
        { label: "Nome", value: "Marina Alves" },
        { label: "Responsabilidades", value: "Principal" },
        { label: "E-mail principal", value: "marina@alvescom.com.br" },
        { label: "Telefone / WhatsApp", value: "(11) 98888-1200" },
        { label: "Usuário do WhatsApp", value: "@marinaalves" },
        { mail: true, label: "E-mail para assinatura", value: "marina@alvescom.com.br", usarPrincipal: true },
        { mail: true, label: "E-mail de login (Meu Espaço)", value: "marina@alvescom.com.br", usarPrincipal: true }
      ]},
      { title: "Endereços", items: [
        { label: "CEP", value: "05305-000" },
        { label: "Tipo", value: "Comercial" },
        { label: "Logradouro", value: "Av. Imperatriz Leopoldina" },
        { label: "País", value: "Brasil" },
        { label: "Estado", value: "SP" },
        { label: "Cidade", value: "São Paulo" },
        { label: "Bairro", value: "Vila Leopoldina" },
        { label: "Número do endereço", value: "1200" }
      ]}
    ]
  },
  "2": {
    nome: "Logística Contorno Ltda", tipo: "PJ", status: "Inadimplente",
    dados: [
      { title: "Identificação", items: [
        { label: "CNPJ", value: "98.765.432/0001-10" },
        { label: "Razão social", value: "Logística Contorno Ltda" },
        { label: "Nome fantasia", value: "Contorno Log" },
        { label: "Data de fundação", value: "07/08/2011" },
        { label: "Natureza jurídica", value: "Sociedade Empresária Limitada" },
        { label: "Porte", value: "Médio" },
        { label: "Inscrição municipal", value: "8.902.114-0" },
        { label: "Inscrição estadual", value: "336.118.902.220" },
        { check: true, label: "Pessoa contribuinte do IBS e da CBS", checked: false }
      ]},
      { title: "Representantes e procuradores", reps: [
        { nome: "Paulo Contorno", cpf: "223.445.667-88", tipo: "Legal", doc: "rg-paulo-contorno.jpg" }
      ]},
      { title: "Contatos", items: [
        { label: "Nome", value: "Paulo Contorno" },
        { label: "Responsabilidades", value: "Cobrança" },
        { label: "E-mail principal", value: "contato@contorno.log.br" },
        { label: "Telefone / WhatsApp", value: "(11) 97777-3410" },
        { label: "Usuário do WhatsApp", value: "@contornolog" },
        { mail: true, label: "E-mail para assinatura", value: "contato@contorno.log.br", usarPrincipal: true },
        { mail: true, label: "E-mail de login (Meu Espaço)", value: "contato@contorno.log.br", usarPrincipal: true }
      ]},
      { title: "Endereços", items: [
        { label: "CEP", value: "07034-000" },
        { label: "Tipo", value: "Comercial" },
        { label: "Logradouro", value: "Rod. Presidente Dutra, km 225" },
        { label: "País", value: "Brasil" },
        { label: "Estado", value: "SP" },
        { label: "Cidade", value: "Guarulhos" },
        { label: "Bairro", value: "Cumbica" },
        { label: "Número do endereço", value: "225" }
      ]}
    ]
  },
  "3": {
    nome: "Studio Prisma Arquitetura", tipo: "PF", status: "Move-out avisado",
    dados: [
      { title: "Identificação", items: [
        { label: "Nome do locatário", value: "Helena Prisma Rodrigues" },
        { label: "Nacionalidade", value: "Brasileira" },
        { label: "CPF", value: "045.678.912-33" },
        { label: "Tipo de documento", value: "RG" },
        { label: "Número do documento", value: "34.567.890-1" },
        { label: "Data de nascimento", value: "18/05/1987" },
        { label: "Telefone da pessoa", value: "(11) 96543-2211" },
        { check: true, label: "Pessoa contribuinte do IBS e da CBS", checked: true },
        { label: "CNPJ", value: "45.678.912/0001-33" }
      ]},
      { title: "Contatos", items: [
        { label: "Nome", value: "Helena Prisma" },
        { label: "Responsabilidades", value: "Principal" },
        { label: "E-mail principal", value: "financeiro@studioprisma.com" },
        { label: "Telefone / WhatsApp", value: "(11) 96543-2211" },
        { label: "Usuário do WhatsApp", value: "@studioprisma" },
        { mail: true, label: "E-mail para assinatura", value: "financeiro@studioprisma.com", usarPrincipal: true },
        { mail: true, label: "E-mail de login (Meu Espaço)", value: "financeiro@studioprisma.com", usarPrincipal: true }
      ]},
      { title: "Endereços", items: [
        { label: "CEP", value: "04538-133" },
        { label: "Tipo", value: "Comercial" },
        { label: "Logradouro", value: "Av. Brigadeiro Faria Lima" },
        { label: "País", value: "Brasil" },
        { label: "Estado", value: "SP" },
        { label: "Cidade", value: "São Paulo" },
        { label: "Bairro", value: "Itaim Bibi" },
        { label: "Número do endereço", value: "3477" }
      ]}
    ]
  },
  "4": {
    nome: "Comercial Dez Irmãos Ltda", tipo: "PJ", status: "Blacklist",
    dados: [
      { title: "Identificação", items: [
        { label: "CNPJ", value: "33.444.555/0001-77" },
        { label: "Razão social", value: "Comercial Dez Irmãos Ltda" },
        { label: "Nome fantasia", value: "Dez Irmãos" },
        { label: "Data de fundação", value: "23/01/2009" },
        { label: "Natureza jurídica", value: "Sociedade Empresária Limitada" },
        { label: "Porte", value: "EPP" },
        { label: "Inscrição municipal", value: "5.517.740-2" },
        { label: "Inscrição estadual", value: "142.775.001.559" },
        { check: true, label: "Pessoa contribuinte do IBS e da CBS", checked: true }
      ]},
      { title: "Representantes e procuradores", reps: [
        { nome: "Ricardo Dez", cpf: "334.556.778-99", tipo: "Legal", doc: "cnh-ricardo-dez.jpg" },
        { nome: "Marta Dez", cpf: "445.667.889-00", tipo: "Procurador", doc: "rg-marta-dez.jpg" }
      ]},
      { title: "Contatos", items: [
        { label: "Nome", value: "Ricardo Dez" },
        { label: "Responsabilidades", value: "Operacional" },
        { label: "E-mail principal", value: "compras@dezirmaos.com.br" },
        { label: "Telefone / WhatsApp", value: "(11) 95555-8890" },
        { label: "Usuário do WhatsApp", value: "@dezirmaos" },
        { mail: true, label: "E-mail para assinatura", value: "compras@dezirmaos.com.br", usarPrincipal: true },
        { mail: true, label: "E-mail de login (Meu Espaço)", value: "compras@dezirmaos.com.br", usarPrincipal: true }
      ]},
      { title: "Endereços", items: [
        { label: "CEP", value: "01141-000" },
        { label: "Tipo", value: "Comercial" },
        { label: "Logradouro", value: "Av. Marquês de São Vicente" },
        { label: "País", value: "Brasil" },
        { label: "Estado", value: "SP" },
        { label: "Cidade", value: "São Paulo" },
        { label: "Bairro", value: "Barra Funda" },
        { label: "Número do endereço", value: "446" }
      ]}
    ]
  },
  "5": {
    nome: "Ateliê Norte", tipo: "PF", status: "Inativo",
    dados: [
      { title: "Identificação", items: [
        { label: "Nome do locatário", value: "Ana Beatriz Nogueira" },
        { label: "Nacionalidade", value: "Brasileira" },
        { label: "CPF", value: "071.222.333-44" },
        { label: "Tipo de documento", value: "CNH" },
        { label: "Número do documento", value: "058.774.221-90" },
        { label: "Data de nascimento", value: "02/11/1991" },
        { label: "Telefone da pessoa", value: "(11) 94321-7788" },
        { check: true, label: "Pessoa contribuinte do IBS e da CBS", checked: false }
      ]},
      { title: "Contatos", items: [
        { label: "Nome", value: "Ana Nogueira" },
        { label: "Responsabilidades", value: "Principal" },
        { label: "E-mail principal", value: "ana@atelienorte.com" },
        { label: "Telefone / WhatsApp", value: "(11) 94321-7788" },
        { label: "Usuário do WhatsApp", value: "@atelienorte" },
        { mail: true, label: "E-mail para assinatura", value: "ana@atelienorte.com", usarPrincipal: true },
        { mail: true, label: "E-mail de login (Meu Espaço)", value: "ana@atelienorte.com", usarPrincipal: true }
      ]},
      { title: "Endereços", items: [
        { label: "CEP", value: "03310-000" },
        { label: "Tipo", value: "Residencial" },
        { label: "Logradouro", value: "Rua Tuiuti" },
        { label: "País", value: "Brasil" },
        { label: "Estado", value: "SP" },
        { label: "Cidade", value: "São Paulo" },
        { label: "Bairro", value: "Tatuapé" },
        { label: "Número do endereço", value: "1520" }
      ]}
    ]
  }
};
