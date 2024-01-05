import Layout from "./components/Layout";
import commands from "./assets/commands.json";
import styles from "./App.module.css";

function App() {
  return (
    <Layout>
      <section style={{ "background-color": "rgb(12, 12, 12)" }}>
        <b class="logo">
          UTIL<span style={{ color: "rgb(0, 150, 255)" }}>O</span>
        </b>
        <p>
          <b>간단한 디스코드 봇</b>
          <br />
          <a href="https://github.com/OhBeomho/utilo">소스코드</a>&nbsp;
        </p>
        <p>
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=1185461198418870322&permissions=8&scope=bot"
            class="button"
          >
            서버에 추가
          </a>
        </p>
      </section>
      <section>
        <div style={{ display: "flex", "align-items": "center", "justify-content": "center" }}>
          <div>
            <b class="title">커밋 내역</b>
            {/* TODO: Get github commist list */}
          </div>
          <div>
            <b class="title">명령어 목록</b>
            <ul style={{ "text-align": "left", "font-size": "15px" }}>
              {commands.map((command) => (
                <li title={command.desc}>
                  {command.name}
                  {command.subcommands && (
                    <>
                      <br />
                      {command.subcommands.map((subcommand, index) => (
                        <>
                          <div style={{ display: "flex" }}>
                            <div
                              class={index === command.subcommands.length - 1 ? styles.lastTreeNode : styles.treeNode}
                            ></div>
                            <div title={subcommand.desc}>{subcommand.name}</div>
                          </div>
                        </>
                      ))}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default App;
