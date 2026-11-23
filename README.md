# 🌊 WMK Silent Depths — Comando Submarino

**Simulador 3D de submarinos com navegação, sonar, tática naval e academia de comando.**

> Projeto em desenvolvimento • versão do pacote: **v0.2.0** • Interface em **português (Brasil)**

![Capa do WMK Silent Depths](logo-wmk-silent-depths.png)

## 🎮 O projeto

**WMK Silent Depths** evolui o protótipo **ABISMO — Comando Submarino** para um simulador naval acessível no navegador, com operações de treinamento, exploração, detecção acústica e combates simulados. A física e a acústica são aproximadas para fins de entretenimento e educação; não correspondem a parâmetros técnicos operacionais reais.

### ⚓ Recursos do protótipo
- Cenário 3D em **Three.js**, sem engine externa ou Docker.
- **Sonar passivo e ativo**, radar de superfície e periscópio.
- **Carta tática**, identificação de contatos e estações de comando.
- **Torpedos, mísseis e contramedidas** simulados.
- Gestão de **profundidade, bateria, ar, ruído e integridade do casco**.
- **Missões de treinamento**, contatos com IA e manual em português.
- **Opções gráficas F2** com perfis de qualidade e FPS.
- Motor **Three.js incluído localmente** na pasta `vendor/`.

## 🖥️ Instalação no Windows

1. Baixe o projeto por **Code → Download ZIP** (quando o código estiver publicado).
2. Extraia a pasta.
3. Execute **`INICIAR_WINDOWS.bat`**.
4. Abra **http://127.0.0.1:8765** se não abrir automaticamente.

O inicializador procura Python 3 (`py` ou `python`) e, como alternativa, PHP. **Não exige Docker nem npm para jogar**. Pode ser possível abrir `index.html` diretamente, dependendo das permissões do navegador.

### Hospedagem no GitHub Pages
O projeto é estático. Depois de enviar todos os arquivos da versão, vá a **Settings → Pages → Build and deployment → Source: GitHub Actions**. O fluxo em `.github/workflows/pages.yml` faz a implantação da raiz do repositório. O Pages só funcionará corretamente após o código e a pasta `vendor/` serem publicados.

## ⌨️ Controles

| Teclas | Ação |
| --- | --- |
| W / S | Potência |
| A / D | Leme |
| C / X | Mergulhar / subir |
| Z | Manter profundidade |
| L / N | Modo silencioso / snorkel |
| R / I / T | Sonar ativo / classificar / marcar contato |
| J / M | Selecionar torpedo / míssil |
| Espaço / Enter | Disparar armamento simulado |
| G / E | Contramedida / radar |
| 0 a 4 | Alternar estações |
| F2 / H / Esc | Gráficos / manual / pausa |

Consulte `manual.html` para mais detalhes.

## 🧪 Testes

Com Node.js instalado, execute `node verify.cjs` na pasta do projeto. O pacote v0.2.0 passou **57 testes automatizados**, mas isso não substitui os testes visuais e de desempenho em diferentes navegadores e computadores.

## 🗺️ Próximas etapas
Consulte **[Roadmap interativo](roadmap.html)** para acompanhar as prioridades: hangar e classes configuradas em JSON, editor de missões, painéis móveis, modelos GLB, tripulação simulada e danos por compartimento.

## 📁 Estrutura esperada do pacote
```text
WMK-Silent-Depths/
├── index.html
├── style.css
├── simulator.js
├── graphics.js
├── verify.cjs
├── manual.html
├── roadmap.html
├── logo-wmk-silent-depths.png
├── INICIAR_WINDOWS.bat
└── vendor/
    └── three.min.js
```

## 📜 Licenciamento

**Importante:** o licenciamento do código-base herdado do protótipo ABISMO ainda precisa ser verificado antes de definir licença de redistribuição para o projeto completo. **Não se presume licença MIT para código de terceiros sem autorização**. A atribuição abaixo se refere à personalização WMK, sem substituir os créditos dos titulares originais.

## 👨‍💻 Créditos

**Walney Moreira Klein**  
✉️ **walneyk@hotmail.com**  
🔗 [GitHub: WalneyNF](https://github.com/WalneyNF)

**WMK Silent Depths — Comando Submarino.**
