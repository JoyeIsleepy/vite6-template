import React from "react";
import { Layout,AsideModule } from "@/components";  
import ModuleA from "./ModuleA";

export default function index() {
  return (
    <Layout
      left={
        <AsideModule extraName="slideInFromLeft">
           <ModuleA />
        </AsideModule>
      }
      center={<div>123</div>}
      right={
        <AsideModule extraName="slideInFromRight">
          <div>11</div>
        </AsideModule>
      }
      mapCom={<div>123</div>}
    />
  );
}
