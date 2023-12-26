import Layout from "./components/Layout";

function App() {
    return (
        <Layout>
            <section style={{ "background-color": "rgb(12, 12, 12)" }}>
                <b class="title">
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
            <section>{/* TODO: More contents */}</section>
        </Layout>
    );
}

export default App;
