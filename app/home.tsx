import { css, cx } from "hono/css";
import { Suspense } from "hono/jsx";
import { Button } from "./components/button";
import { DatePicker } from "./components/datepicker";
import { Title } from "./components/title";
import Layout from "./layout";

const suspendedClass = css`
    background-color: #1c1e1c;
    color: #50fd50;
  `;

export function Home() {
  const counter = 0;
  return (
    <Layout
      title="Home"
      className="w-full mx-auto py-6 px-3 space-y-10 lg:max-w-screen-md"
    >
      <div class="store space-y-6" x-data={`{ count: ${counter} }`}>
        <div class={cx(suspendedClass, "rounded px-3 py-2")}>
          <Suspense fallback={<div>loading...</div>}>
            <AsyncComponent />
          </Suspense>
        </div>
        <div class="flex justify-between items-center h-20">
          <div class="flex space-x-4 items-center">
            <Button type="button" x-on:click="count++">
              Show reactivity
            </Button>
            <p x-text="count">{counter}</p>
          </div>
          <DatePicker />
        </div>
        <div class="flex h-[1px] w-full bg-muted-foreground opacity-15">
          &nbsp;
        </div>
        <section>
          <Title>Home</Title>
          <a href="/about" class="underline underline-offset-4 text-blue-700">
            About us
          </a>
          <p class="leading-10 my-12 text-pretty text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            commodo velit. Nam laoreet odio at consequat varius. Quisque congue,
            urna id tristique vehicula, purus ipsum posuere lectus, vitae
            imperdiet enim nulla ac nunc. Vestibulum a leo nulla. Aenean eget
            ante mattis, posuere justo sed, pulvinar lectus. In ultricies eget
            neque eget iaculis. Nullam pulvinar tempor enim vel convallis.
            Curabitur interdum, ligula sit amet dapibus viverra, libero leo
            lobortis lorem, vel venenatis est sem in tortor. Etiam eget mattis
            justo. Ut ut velit at sem pretium tempus quis sed diam. Morbi at
            laoreet justo. Maecenas vel leo purus. Pellentesque mollis viverra
            mi, sit amet pellentesque lectus condimentum nec. Curabitur rutrum
            nisl maximus elit bibendum dapibus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut et tempus purus. Nulla arcu est,
            maximus non scelerisque eu, elementum eu leo. Sed porttitor eros at
            efficitur elementum. Curabitur id lorem tristique, pharetra sapien
            vel, vestibulum tortor. Phasellus id aliquet lacus, eget tristique
            mi. Fusce tincidunt libero et vulputate posuere. Vestibulum ornare
            ornare erat, ut consequat nunc elementum nec. Donec non metus
            pretium, aliquam ante a, venenatis libero. Ut molestie ipsum non
            velit accumsan lacinia. Pellentesque feugiat leo enim, ac malesuada
            lorem iaculis et. In dignissim tempus libero, vel malesuada nunc
            tincidunt in. Morbi nec elit nisi. Phasellus eget dictum mauris, et
            convallis ipsum. Sed sed placerat massa. In ac eros tristique,
            pharetra eros vel, iaculis nisi. Phasellus sodales ipsum velit, id
            euismod tortor faucibus a. Nulla ornare vulputate velit sit amet
            laoreet. Vivamus a ante mi. Maecenas pulvinar sollicitudin sem a
            sollicitudin. Donec vestibulum erat congue ligula vulputate varius.
            Maecenas sit amet interdum neque. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut facilisis, arcu ut mollis interdum,
            metus tortor consequat felis, eu aliquet magna velit suscipit arcu.
            Integer in ornare enim, at vestibulum erat. Duis maximus pharetra
            dolor, feugiat blandit quam viverra sit amet. Proin rhoncus
            venenatis molestie. Morbi vehicula facilisis tortor. Donec pharetra,
            lacus aliquet luctus fermentum, erat mi ullamcorper neque, eu
            malesuada quam est non lacus. Vestibulum ultrices rhoncus justo a
            sodales. Cras at eleifend sem. Proin consequat, risus quis rhoncus
            porta, nisi metus rhoncus mi, gravida ullamcorper sem justo vel
            orci. Maecenas ex lectus, dignissim eu sapien nec, hendrerit ornare
            augue. Integer elit turpis, volutpat vitae consequat vel, sodales
            non tortor. Maecenas vehicula congue convallis. Vestibulum tempor
            erat lectus, et molestie est sagittis eget. Sed posuere egestas
            purus a maximus. Cras sed sapien lacus. Curabitur non ex commodo
            lectus luctus semper eget id est. Vivamus orci risus, posuere
            suscipit ultricies vitae, luctus quis lectus.
          </p>
        </section>
      </div>
    </Layout>
  );
}

async function AsyncComponent() {
  await new Promise((r) => setTimeout(r, 100));
  return <div>Async component loaded!</div>;
}
