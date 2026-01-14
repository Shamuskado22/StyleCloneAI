# StyleClone.AI

**AI-Powered Neural Style Transfer for Image Generation**

Transform your images with advanced artificial intelligence using the artistic style of one image applied to the content of another.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-18.0+-blue.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

---

## 🌍 Languages | Idiomas

- **[English (EN)](#-english-version)** | **[Português Brasileiro (PT-BR)](#-versão-em-português-brasileiro)**

---

# 🇬🇧 ENGLISH VERSION

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Core Functions](#core-functions)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 🎨 Overview

StyleClone.AI is a modern web application that leverages neural style transfer technology to blend the textures and colors of a reference image with the structure of a target image. Using advanced AI models (VGG-19 architecture), it creates stunning artistic transformations in seconds.

Whether you're a digital artist, designer, or creative enthusiast, StyleClone.AI empowers you to reimagine your visual content with professional-grade style transfer capabilities.

---

## ✨ Features

### 🖼️ **Dual Image Upload**

- Upload a style reference image to define the artistic style
- Upload a target content image to apply the style to
- Intuitive drag-and-drop interface with preview
- Easy image management with clear/remove options

### 🎭 **Aspect Ratio Control**

- Multiple preset aspect ratios: 1:1, 4:3, 3:4, 16:9, 9:16
- Flexible output dimensions to match your needs
- Real-time ratio selection before generation

### 🤖 **Advanced AI Processing**

- Neural Transfer using VGG-19 architecture
- High-fidelity style cloning for realistic results
- Intelligent texture and color blending
- Fast processing (3-second generation time)

### 🎯 **High-Resolution Output**

- Generate images up to 4K resolution
- Enhanced texture detail preservation
- Multiple export formats (PNG, SVG)
- Quality optimization for web and print

### 🌓 **Dark Mode Support**

- Seamless light/dark theme switching
- System preference detection
- Theme persistence in local storage
- Eye-friendly interface for extended use

### ⚡ **Fast & Responsive**

- Real-time image preview
- Responsive design for desktop and mobile
- Smooth animations and transitions
- Loading state indicators

### 📥 **Easy Downloads**

- One-click PNG export
- Instant file download to your device
- New generation flow for multiple attempts

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- React 18.0+
- Modern web browser

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Shamuskado22/StyleCloneAI.git
cd StyleCloneAI
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Start the development server:**

```bash
npm start
# or
yarn start
```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to start using StyleClone.AI

---

## 💡 Usage

### Basic Workflow

1. **Step 1: Upload Style Reference**

   - Click on the first upload area
   - Select an image with the artistic style you want to apply
   - The image will be displayed in the preview area

2. **Step 2: Upload Target Content**

   - Click on the second upload area
   - Select the image whose content you want to transform
   - The image will be displayed in the preview area

3. **Step 3: Select Aspect Ratio**

   - Choose your desired output aspect ratio (1:1, 4:3, 3:4, 16:9, 9:16)
   - The selection will be highlighted in blue

4. **Step 4: Generate**

   - Click the "Generate Styled Image" button
   - Watch the AI work its magic (3-second processing)
   - Your result will appear in the preview panel

5. **Step 5: Download**
   - Hover over the result to reveal the download button
   - Click the download icon to save as PNG
   - Click "New Style" to start over with different images

### Tips for Best Results

- Use high-quality, well-lit reference images
- Style images with clear texture and color palettes work best
- Experiment with different aspect ratios
- Content images with distinct subjects produce better transformations
- Save multiple variations to find your favorite result

---

## 🔧 Core Functions

### State Management

**`handleImageUpload(e, type)`**

- Processes image file selection
- Converts image to base64 data URL
- Updates state for either style or content image
- Enables image preview

**`clearImage(type)`**

- Removes selected style or content image
- Resets preview area
- Allows image replacement

### Generation

**`handleGenerate()`**

- Initiates the AI style transfer process
- Sets loading state for UI feedback
- Simulates 3-second processing delay
- Returns generated image result

**`resetGeneration()`**

- Clears the result image
- Prepares interface for new generation
- Resets the generation state

### Theme Management

**`setDarkMode(boolean)`**

- Toggles between light and dark themes
- Persists theme preference to localStorage
- Updates DOM with dark class
- Detects system color scheme preference

### UI Rendering

**Image Upload Components**

- Dynamic preview rendering
- Conditional display for uploaded vs. empty states
- Clear button overlay with rounded icon button

**Aspect Ratio Selection**

- Button grid with active state styling
- Visual feedback for selected ratio
- Real-time ratio updates

**Result Display**

- Animated loading spinner during generation
- Result image with overlay actions on hover
- Download and reset action buttons
- Status badge for generated images

---

## 🛠️ Technologies

### Frontend Framework

- **React 18** - Modern UI library with hooks
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### Features & Utilities

- **FileReader API** - Image file handling
- **LocalStorage** - Theme persistence
- **CSS Animations** - Smooth transitions and loading states
- **Media Queries** - Responsive design

### Architecture

- Functional Components with React Hooks
- Controlled component patterns
- Efficient state management
- Modular CSS utilities

---

## 📁 Project Structure

```
StyleCloneAI/
├── index.jsx           # Main React component
├── package.json        # Dependencies and scripts
├── README.md           # English documentation
├── README.pt-BR.md     # Portuguese documentation
├── .git/               # Git version control
└── public/
    └── index.html      # HTML entry point
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style and conventions
- Test thoroughly before submitting PR
- Add meaningful commit messages
- Update documentation as needed

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👨‍💻 Author

**Samuel** - [@Shamuskado22](https://github.com/Shamuskado22)

---

## 🌟 Support

If you find StyleClone.AI helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting issues and bugs
- 💡 Suggesting new features
- 📢 Sharing with others

---

## 📧 Contact & Feedback

For questions, suggestions, or feedback:

- Open an issue on GitHub
- Check existing issues before creating new ones
- Be descriptive and provide context

---

**Made with ❤️ by Samuel**

_Transform your vision with AI-powered style transfer_

---

# 🇧🇷 VERSÃO EM PORTUGUÊS BRASILEIRO

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Começar](#começar)
- [Instalação](#instalação)
- [Uso](#uso)
- [Funções Principais](#funções-principais)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## 🎨 Visão Geral

StyleClone.AI é uma aplicação web moderna que aproveita a tecnologia de transferência de estilo neural para mesclar as texturas e cores de uma imagem de referência com a estrutura de uma imagem alvo. Usando modelos de IA avançados (arquitetura VGG-19), cria transformações artísticas impressionantes em segundos.

Seja você um artista digital, designer ou entusiasta criativo, StyleClone.AI permite que você reimagine seu conteúdo visual com recursos de transferência de estilo de nível profissional.

---

## ✨ Funcionalidades

### 🖼️ **Upload Duplo de Imagens**

- Envie uma imagem de referência de estilo para definir o estilo artístico
- Envie uma imagem de conteúdo alvo para aplicar o estilo
- Interface intuitiva de arrastar e soltar com pré-visualização
- Gerenciamento fácil de imagens com opções de limpar/remover

### 🎭 **Controle de Proporção de Aspecto**

- Múltiplas proporções predefinidas: 1:1, 4:3, 3:4, 16:9, 9:16
- Dimensões de saída flexíveis para atender suas necessidades
- Seleção de proporção em tempo real antes da geração

### 🤖 **Processamento de IA Avançado**

- Transferência Neural usando arquitetura VGG-19
- Clonagem de estilo de alta fidelidade para resultados realistas
- Mistura inteligente de texturas e cores
- Processamento rápido (tempo de geração de 3 segundos)

### 🎯 **Saída em Alta Resolução**

- Gere imagens com até 4K de resolução
- Preservação aprimorada de detalhes de textura
- Múltiplos formatos de exportação (PNG, SVG)
- Otimização de qualidade para web e impressão

### 🌓 **Suporte a Modo Escuro**

- Alternância contínua entre temas claro e escuro
- Detecção de preferência do sistema
- Persistência de tema no armazenamento local
- Interface amigável para uso prolongado

### ⚡ **Rápido e Responsivo**

- Pré-visualização de imagem em tempo real
- Design responsivo para desktop e móvel
- Animações e transições suaves
- Indicadores de estado de carregamento

### 📥 **Downloads Fáceis**

- Exportação de PNG com um clique
- Download instantâneo de arquivo para seu dispositivo
- Fluxo de nova geração para múltiplas tentativas

---

## 🚀 Começar

### Pré-requisitos

- Node.js (v14 ou superior)
- Gerenciador de pacotes npm ou yarn
- React 18.0+
- Navegador web moderno

### Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/Shamuskado22/StyleCloneAI.git
cd StyleCloneAI
```

2. **Instale as dependências:**

```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento:**

```bash
npm start
# ou
yarn start
```

4. **Abra seu navegador:**
   Navegue até `http://localhost:3000` para começar a usar StyleClone.AI

---

## 💡 Uso

### Fluxo de Trabalho Básico

1. **Passo 1: Enviar Referência de Estilo**

   - Clique na primeira área de upload
   - Selecione uma imagem com o estilo artístico que deseja aplicar
   - A imagem será exibida na área de pré-visualização

2. **Passo 2: Enviar Conteúdo Alvo**

   - Clique na segunda área de upload
   - Selecione a imagem cujo conteúdo você deseja transformar
   - A imagem será exibida na área de pré-visualização

3. **Passo 3: Selecionar Proporção de Aspecto**

   - Escolha sua proporção de saída desejada (1:1, 4:3, 3:4, 16:9, 9:16)
   - A seleção será destacada em azul

4. **Passo 4: Gerar**

   - Clique no botão "Gerar Imagem com Estilo"
   - Veja a IA funcionando (processamento de 3 segundos)
   - Seu resultado aparecerá no painel de pré-visualização

5. **Passo 5: Baixar**
   - Passe o mouse sobre o resultado para revelar o botão de download
   - Clique no ícone de download para salvar como PNG
   - Clique em "Novo Estilo" para começar novamente com imagens diferentes

### Dicas para Melhores Resultados

- Use imagens de referência de alta qualidade e bem iluminadas
- Imagens de estilo com texturas e paletas de cores claras funcionam melhor
- Experimente diferentes proporções de aspecto
- Imagens de conteúdo com assuntos distintos produzem melhor transformação
- Salve várias variações para encontrar seu resultado favorito

---

## 🔧 Funções Principais

### Gerenciamento de Estado

**`handleImageUpload(e, type)`**

- Processa a seleção de arquivo de imagem
- Converte imagem para URL de dados base64
- Atualiza estado para imagem de estilo ou conteúdo
- Ativa pré-visualização de imagem

**`clearImage(type)`**

- Remove a imagem de estilo ou conteúdo selecionada
- Redefine a área de pré-visualização
- Permite substituição de imagem

### Geração

**`handleGenerate()`**

- Inicia o processo de transferência de estilo de IA
- Define estado de carregamento para feedback da interface
- Simula atraso de processamento de 3 segundos
- Retorna resultado de imagem gerada

**`resetGeneration()`**

- Limpa a imagem de resultado
- Prepara interface para nova geração
- Redefine o estado de geração

### Gerenciamento de Tema

**`setDarkMode(boolean)`**

- Alterna entre temas claros e escuros
- Persiste preferência de tema no localStorage
- Atualiza DOM com classe dark
- Detecta preferência de esquema de cores do sistema

### Renderização da Interface

**Componentes de Upload de Imagem**

- Renderização de pré-visualização dinâmica
- Exibição condicional para estados carregado vs. vazio
- Botão limpar com ícone de botão arredondado

**Seleção de Proporção de Aspecto**

- Grade de botões com estilo de estado ativo
- Feedback visual para proporção selecionada
- Atualizações de proporção em tempo real

**Exibição de Resultado**

- Spinner de carregamento animado durante geração
- Imagem de resultado com ações de sobreposição ao passar o mouse
- Botões de ação de download e redefinição
- Crachá de status para imagens geradas

---

## 🛠️ Tecnologias

### Framework Frontend

- **React 18** - Biblioteca UI moderna com hooks
- **TailwindCSS** - Framework CSS de primeira utilidade
- **Lucide React** - Biblioteca de ícones bonita

### Recursos & Utilitários

- **FileReader API** - Manipulação de arquivo de imagem
- **LocalStorage** - Persistência de tema
- **CSS Animations** - Transições suaves e estados de carregamento
- **Media Queries** - Design responsivo

### Arquitetura

- Componentes Funcionais com React Hooks
- Padrões de componentes controlados
- Gerenciamento eficiente de estado
- Utilitários CSS modulares

---

## 📁 Estrutura do Projeto

```
StyleCloneAI/
├── index.jsx              # Componente React principal
├── package.json           # Dependências e scripts
├── README.md              # Documentação em inglês e português
├── .git/                  # Controle de versão Git
└── public/
    └── index.html         # Ponto de entrada HTML
```

---

## 🤝 Contribuindo

Bem-vindo a contribuições! Veja como você pode ajudar:

1. **Faça um Fork do repositório**
2. **Crie uma branch de recurso** (`git checkout -b feature/RecursoIncrível`)
3. **Commit suas mudanças** (`git commit -m 'Adicionar RecursoIncrível'`)
4. **Push para a branch** (`git push origin feature/RecursoInccrível`)
5. **Abra um Pull Request**

### Diretrizes de Desenvolvimento

- Siga o estilo de código e convenções existentes
- Teste completamente antes de enviar PR
- Adicione mensagens de commit significativas
- Atualize a documentação conforme necessário

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

```
MIT License

É concedida permissão, gratuitamente, a qualquer pessoa que obtenha uma cópia
deste software e dos arquivos de documentação associados (o "Software"), para
lidar com o Software sem restrição, incluindo, sem limitação, os direitos de
usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou
vender cópias do Software, e permitir que as pessoas a quem o Software é
fornecido o façam, sujeito às seguintes condições:

O aviso de direitos autorais anterior e este aviso de permissão devem ser
incluídos em todas as cópias ou partes substanciais do Software.
```

---

## 👨‍💻 Autor | Author

**Samuel** - [@Shamuskado22](https://github.com/Shamuskado22)

---

## 🌟 Apoie | Support

Se você achar StyleClone.AI útil, considere | If you find StyleClone.AI helpful, please consider:

- ⭐ Dar uma estrela ao repositório | Star the repository
- 🐛 Reportar problemas e bugs | Report issues and bugs
- 💡 Sugerir novas funcionalidades | Suggest new features
- 📢 Compartilhar com outras pessoas | Share with others

---

## 📧 Contato & Feedback | Contact & Feedback

Para perguntas, sugestões ou feedback | For questions, suggestions, or feedback:

- Open an issue on GitHub | Abra uma issue no GitHub
- Check existing issues before creating new ones | Verifique issues existentes antes de criar novos
- Be descriptive and provide context | Seja descritivo e forneça contexto

---

**Made with ❤️ by Samuel** | **Feito com ❤️ por Samuel**

_Transform your vision with AI-powered style transfer_ | _Transforme sua visão com transferência de estilo alimentada por IA_
