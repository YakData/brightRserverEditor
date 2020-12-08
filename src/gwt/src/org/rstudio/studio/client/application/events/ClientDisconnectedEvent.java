/*
 * ClientDisconnectedEvent.java
 *
 * Copyright (C) 2009-12 by RStudio, PBC
 *
 * Unless you have received this program directly from RStudio pursuant
 * to the terms of a commercial license agreement with RStudio, then
 * this program is licensed to you under the terms of version 3 of the
 * GNU Affero General Public License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * AGPL (http://www.gnu.org/licenses/agpl-3.0.txt) for more details.
 *
 */
package org.rstudio.studio.client.application.events;

import com.google.gwt.event.shared.GwtEvent;

public class ClientDisconnectedEvent extends GwtEvent<ClientDisconnectedHandler>
{
   public static final GwtEvent.Type<ClientDisconnectedHandler> TYPE =
      new GwtEvent.Type<ClientDisconnectedHandler>();
   
   @Override
   protected void dispatch(ClientDisconnectedHandler handler)
   {
      handler.onClientDisconnected(this);
   }

   @Override
   public GwtEvent.Type<ClientDisconnectedHandler> getAssociatedType()
   {
      return TYPE;
   }
}
