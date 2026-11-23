# 🌊 WMK Silent Depths — Comando Submarino

![Logo oficial WMK Silent Depths](logo-wmk-silent-depths.png)

**Simulador 3D de submarinos com sonar, carta tática, operações navais e academia de comando.**

**Versão:** v0.2.0 · **Idioma:** Português (Brasil) · **Plataforma:** Navegador / Windows

> A imagem acima faz parte da identidade visual oficial e será exibida automaticamente assim que o arquivo `logo-wmk-silent-depths.png` for enviado à raiz do repositório.

## 🎮 Sobre o projeto

O **WMK Silent Depths** desenvolve o protótipo **ABISMO — Comando Submarino** com navegação 3D, sistemas de sonar, treinamento, contatos controlados por IA, torpedos e operações fictícias. As simulações de física e acústica foram simplificadas para aprendizado e entretenimento.

### Recursos
- Mundo 3D criado com **Three.js**, sem Docker ou dependência de serviços externos para rodar.
- Sonar passivo e ativo, radar e periscópio.
- Carta tática, contatos navais e diferentes estações de comando.
- Torpedos, mísseis e contramedidas simulados.
- Administração de profundidade, potência, bateria, ar e integridade estrutural.
- Missões de treinamento e modos de dificuldade.
- Manual interativo em português.
- Configurações gráficas com tecla **F2**, perfis de qualidade e medidor de FPS.

## 🚀 Como instalar no Windows

1. Baixe o projeto por **Code → Download ZIP** depois da publicação dos arquivos do jogo.
2. Extraia tudo em uma pasta.
3. Execute `INICIAR_WINDOWS.bat`.
4. Abra o endereço indicado, geralmente `http://127.0.0.1:8765`.

O inicializador usa Python 3 ou PHP quando disponíveis. **Sem Docker e sem npm para jogar.**

## 🌐 GitHub Pages

O simulador é estático. Depois de enviar `index.html`, `simulator.js`, `style.css`, `graphics.js`, `vendor/three.min.js` e demais recursos, ative **Settings → Pages → Build and deployment**. O site só estará funcional quando esses arquivos forem publicados.

## ⌨️ Comandos

| Tecla | Função |
| --- | --- |
| W / S | Potência |
| A / D | Leme |
| C / X | Mergulhar / subir |
| Z | Manter profundidade |
| L / N | Navegação silenciosa / snorkel |
| R / I / T | Sonar ativo / classificar / marcar contato |
| J / M | Selecionar torpedo / míssil |
| Espaço / Enter | Disparo simulado |
| G / E | Contramedida / radar |
| 0 a 4 | Estações |
| H / F2 / Esc | Manual / gráficos / pausa |

## 📚 Documentação

O pacote local inclui `manual.html` e `roadmap.html`. As próximas evoluções planejadas são hangar de submarinos, configurações individuais em JSON, editor de missões, painéis móveis, modelos GLB, tripulação com IA e simulação de avarias.

## 🧪 Validação

Com Node.js instalado, execute `node verify.cjs`. O pacote local v0.2.0 passou 57 testes automatizados; os testes visuais e de desempenho no Windows ainda são necessários.

## 📜 Licença MIT

Este projeto é distribuído sob a **[Licença MIT](LICENSE)** para as partes do software cujos direitos pertencem ao autor ou cuja redistribuição é autorizada.

A licença MIT permite **usar, copiar, modificar, distribuir e comercializar** essas partes, desde que o aviso de copyright e o texto da licença sejam mantidos.

**Atenção:** o repositório inclui código derivado do protótipo ABISMO e a biblioteca Three.js. A inclusão da licença MIT **não substitui** os direitos e avisos de terceiros. É necessário confirmar a autorização para licenciar o código-base original e preservar os avisos de dependências.

### Direitos autorais e créditos

**Copyright © 2026 Walney Moreira Klein**

**Desenvolvimento e personalização WMK:** Walney Moreira Klein  
**Contato:** walneyk@hotmail.com  
**GitHub:** [@WalneyNF](https://github.com/WalneyNF)

---

**WMK Silent Depths — Comando Submarino** · *Explore. Detecte. Navegue. Sobreviva.*
