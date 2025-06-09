import React from "react";
import { Layout,AsideModule } from "@/components";  

export default function index() {
  return (
    <Layout
      left={
        <AsideModule extraName="slideInFromLeft">
           <div>11</div>
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
